# Desafíos LLD — Patrones de Diseño en JavaScript

Resolución de los cinco desafíos de Diseño de Bajo Nivel (LLD) aplicando principios SOLID y patrones de diseño en JavaScript puro (Node.js).

## Tecnología

* **Lenguaje:** JavaScript (Node.js v18+)
* **Enfoque:** Programación Orientada a Objetos pura — sin frameworks ni dependencias externas.

---

## Desafíos

### 1. Gilded Rose — Refactorización (`desafio1.js`)
* **Patrones:** Strategy + Factory
* **Descripción:** Se reemplazó el condicional monolítico original mediante el patrón Strategy. La clase `Item` original se mantiene intacta. La instanciación de las reglas se maneja con un `StrategyFactory`. Para incorporar el requerimiento de los artículos "Conjured", simplemente se creó la clase `ConjuredStrategy` y se agregó una única línea en la fábrica, aislando el comportamiento y evitando corromper la lógica existente.

### 2. Máquina Expendedora (`desafio2.js`)
* **Patrón:** State + Singleton
* **Descripción:** Implementa los estados `IdleState`, `HasMoneyState` y `DispenseState` para encapsular las interacciones válidas en cada fase transaccional. La clase `VendingMachine` funciona como el contexto general y está blindada bajo el patrón Singleton, garantizando que no se puedan crear en memoria dos instancias simultáneas de la misma máquina física. La dispensación se procesa atómicamente cuando el saldo cubre el costo.

### 3. Sistema de Estacionamiento (`desafio3.js`)
* **Patrón:** Facade + Strategy
* **Descripción:** `ParkingLot` opera como un Facade que enmascara la complejidad del sistema. Delega la asignación física a `ParkingManager`, que agrupa optimizadamente los lugares en listas según su tamaño (small, medium, large) para evitar bucles pesados. La lógica de facturación está totalmente desacoplada a través de la interfaz `PricingStrategy` (implementando un `HourlyPricing`), dejando el sistema abierto a nuevas tarifas empresariales.

### 4. Ride-Sharing tipo Uber (`desafio4.js`)
* **Patrón:** Observer + State + Strategy
* **Descripción:** Construido para sistemas asíncronos. Utiliza `Driver` como el Sujeto observable y `Rider` como el Observador para transmitir cambios de ubicación (GPS). La clase `Trip` transiciona de forma inmutable a través de un FSM (Máquina de Estados Finitos): `RequestedState` → `DriverAssignedState` → `InProgressState` → `CompletedState`. El costo de cada viaje se delega a estrategias inyectables como `SurgePricing`.

### 5. Orquestador de Agentes IA (`desafio5.js`)
* **Patrones:** Strategy + Command
* **Descripción:** Un ecosistema para IA Agentic. Aplica el patrón Strategy para definir cómo el `Orchestrator` gobierna a los agentes (`SequentialStrategy` para cadenas deductivas o `ConcurrentStrategy` para procesamiento paralelo masivo). Las interacciones físicas de los agentes con el entorno se encapsulan restrictivamente mediante `Command` (`ApiCommand`). Además, cada `Agent` asegura su persistencia temporal resguardando sus pensamientos lógicos en un `AgentState`.

---

## Ejecución

Para correr y probar cada uno de los módulos arquitectónicos, ejecutalos individualmente en tu terminal:

\`\`\`bash
node desafio1.js
node desafio2.js
node desafio3.js
node desafio4.js
node desafio5.js
\`\`\`

---

## Principios SOLID aplicados

| Principio | Ejemplo concreto en el código implementado |
| :--- | :--- |
| **S — Responsabilidad Única** | `ParkingManager` (desafio3) solo administra las listas de lugares libres; la clase `ParkingLot` solo actúa de enrutador. |
| **O — Abierto/Cerrado** | Incorporar un sistema de precios por demanda en viajes (desafio4) solo requirió inyectar `SurgePricing`, sin tocar la clase `Trip`. |
| **L — Sustitución de Liskov** | En la máquina expendedora (desafio2), cualquier instancia hija de `State` asume el control del flujo sin romper el contrato de `VendingMachine`. |
| **I — Segregación de Interfaces** | Las estrategias (`UpdateStrategy` o `OrchestrationStrategy`) definen contratos concisos de un solo método (`update()`, `orchestrate()`). |
| **D — Inversión de Dependencias** | El `Orchestrator` de IA (desafio5) depende de la abstracción `OrchestrationStrategy`, desconociendo si la ejecución subyacente es en paralelo o en serie. |