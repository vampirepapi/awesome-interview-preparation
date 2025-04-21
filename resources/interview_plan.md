## 6-Month Intensive Daily Planner (DSA Towards the End) - TODO List Format

**Goal:** Prepare for Java Backend Roles (3 YOE)
**Dedication:** ~2 Hours Daily
**Timeline:** 6 Months (Focus on switching within the year)
**Structure:** Core Java -> SOLID -> Design Patterns -> Spring Boot -> DSA -> Interview Prep

---

### Phase 1: Core Java Mastery & SOLID Principles (Months 1-2)

#### Month 1: Core Java Fundamentals & Java 8 Essentials

##### Week 1: Java Basics & OOP Intro

*   [ ] **Day 1:** Environment Setup (JDK, IDE), Basic Syntax, Data Types, Variables, Operators.
*   [ ] **Day 2:** Control Flow (if/else, switch, loops). Practice: Simple calculation programs.
*   [ ] **Day 3:** Intro to OOP: Classes, Objects, Constructors, `this` keyword.
*   [ ] **Day 4:** OOP Pillars: Encapsulation (Getters/Setters, Access Modifiers).
*   [ ] **Day 5:** OOP Pillars: Inheritance (IS-A), `super` keyword, Method Overriding.
*   **Weekend (Sat/Sun):**
    *   [ ] Review Week 1 concepts.
    *   [ ] Solve 5-10 basic Java problems (e.g., HackerRank Java).
    *   [ ] Explain OOP concepts aloud.

##### Week 2: OOP Deep Dive & Core APIs

*   [ ] **Day 6:** OOP Pillars: Polymorphism (Overloading vs. Overriding), `final` keyword.
*   [ ] **Day 7:** OOP Pillars: Abstraction (Abstract Classes, Interfaces).
*   [ ] **Day 8:** Packages, Static keyword (variables, methods, blocks, classes).
*   [ ] **Day 9:** Exception Handling (try-catch-finally, throw, throws, checked vs. unchecked), Custom Exceptions.
*   [ ] **Day 10:** String class (`String`, `StringBuilder`, `StringBuffer`), Immutability.
*   **Weekend:**
    *   [ ] Review Week 2 concepts.
    *   [ ] Practice exception handling scenarios.
    *   [ ] Solve String manipulation problems.
    *   [ ] Refactor a simple program using OOP principles learned.

##### Week 3: Collections Framework

*   [ ] **Day 11:** Collections Hierarchy, `Iterable`, `Collection`. `List` (`ArrayList`, `LinkedList`), Operations, Use Cases.
*   [ ] **Day 12:** `Set` (`HashSet`, `LinkedHashSet`, `TreeSet`), Internal working (Hashing basics).
*   [ ] **Day 13:** `Map` (`HashMap`, `LinkedHashMap`, `TreeMap`), Internal working.
*   [ ] **Day 14:** `equals()` and `hashCode()` contract. Importance for Collections.
*   [ ] **Day 15:** Iterators, `Comparable` vs `Comparator`. Sorting Collections (`Collections.sort`).
*   **Weekend:**
    *   [ ] Review Collections Framework concepts.
    *   [ ] Implement programs using List, Set, Map.
    *   [ ] Solve problems involving searching/sorting elements in collections.
    *   [ ] Understand and explain `equals()`/`hashCode()` contract.

##### Week 4: Java 8 Features (Part 1)

*   [ ] **Day 16:** Functional Interfaces (`@FunctionalInterface`), Lambda Expressions (Syntax, Usage).
*   [ ] **Day 17:** Method References (Different types: static, instance, constructor).
*   [ ] **Day 18:** `Stream` API Intro: Creating Streams (from Collections, Arrays, etc.), Intermediate vs. Terminal operations.
*   [ ] **Day 19:** `Stream` API: `filter()`, `map()`, `forEach()`. Practice transforming and filtering collections.
*   [ ] **Day 20:** `Stream` API: `collect()` (toList, toSet, toMap), `sorted()`, `distinct()`. Practice aggregation.
*   **Weekend:**
    *   [ ] Review Java 8 Lambda, Method References, basic Stream operations.
    *   [ ] Refactor previous collection-based code using Lambdas and Streams.
    *   [ ] Solve stream-based coding challenges (focus on logic).

#### Month 2: Advanced Java, Java 8 Completion & SOLID Principles

##### Week 5: Java 8 Features (Part 2) & Concurrency Intro

*   [ ] **Day 21:** `Stream` API: `reduce()`, `flatMap()`, `limit()`, `skip()`, `groupingBy`, `partitioningBy`.
*   [ ] **Day 22:** Primitive Streams (`IntStream`, `LongStream`, `DoubleStream`) and their specific operations.
*   [ ] **Day 23:** `Optional` Class: Creating Optionals, `isPresent()`, `get()`, `orElse()`, `orElseGet()`, `map()`, `flatMap()`. Handling nulls effectively.
*   [ ] **Day 24:** `Default` and `Static` methods in Interfaces. New Date/Time API (`LocalDate`, `LocalTime`, `LocalDateTime`, `Duration`, `Period`).
*   [ ] **Day 25:** Intro to Multithreading: `Thread` class vs. `Runnable` interface. Thread lifecycle. Basic Synchronization (`synchronized` methods/blocks), race conditions.
*   **Weekend:**
    *   [ ] Review advanced Streams, Optional, Date/Time API, Concurrency basics.
    *   [ ] Solve more complex stream problems (grouping, flatMapping).
    *   [ ] Write simple multi-threaded programs demonstrating race conditions and synchronized solutions.

##### Week 6: Advanced Java & Concurrency

*   [ ] **Day 26:** More Concurrency: `volatile` keyword (visibility). Atomic variables (`AtomicInteger`, `AtomicBoolean`, etc.).
*   [ ] **Day 27:** Executor Framework (`ExecutorService`, `Executors` factory methods, `ThreadPoolExecutor`, `Callable`, `Future`). Submitting tasks.
*   [ ] **Day 28:** Concurrent Collections (`ConcurrentHashMap`, `CopyOnWriteArrayList`, `BlockingQueue`). Use cases.
*   [ ] **Day 29:** Generics: Type parameters, Type Erasure concept, Wildcards (`? extends T`, `? super T`). Generic methods and classes.
*   [ ] **Day 30:** Basic I/O: `File`, `InputStream`/`OutputStream`, `Reader`/`Writer`, `BufferedReader`/`Writer`. Try-with-resources statement. NIO basics (Channels, Buffers - conceptual understanding).
*   **Weekend:**
    *   [ ] Review advanced Concurrency topics (Executors, Concurrent Collections, volatile, Atomic types).
    *   [ ] Review Generics and Wildcards.
    *   [ ] Review Basic I/O and Try-with-resources.
    *   [ ] Practice using ExecutorService for simple tasks.

##### Week 7: SOLID Principles (Part 1)

*   [ ] **Day 31:** Introduction to SOLID Principles. Why they matter for maintainable and scalable code.
*   [ ] **Day 32:** **S**ingle Responsibility Principle (SRP). Define, understand examples, identify violations.
*   [ ] **Day 33:** Practice SRP: Refactor simple Java classes to adhere to SRP. Discuss scenarios.
*   [ ] **Day 34:** **O**pen/Closed Principle (OCP). Define, understand role of abstraction/polymorphism.
*   [ ] **Day 35:** Practice OCP: Implement examples using interfaces/abstract classes to allow extension without modification (e.g., different notification types).
*   **Weekend:**
    *   [ ] Review SRP & OCP in depth.
    *   [ ] Find examples/violations in standard Java libraries or small code snippets.
    *   [ ] Practice refactoring small examples to adhere to SRP/OCP. Explain the benefits.

##### Week 8: SOLID Principles (Part 2)

*   [ ] **Day 36:** **L**iskov Substitution Principle (LSP). Define, understand the "is-a" contract strictly. Common violations (e.g., throwing unexpected exceptions).
*   [ ] **Day 37:** Practice LSP: Analyze examples, discuss why certain inheritance hierarchies violate LSP.
*   [ ] **Day 38:** **I**nterface Segregation Principle (ISP). Define, benefits of smaller, client-specific interfaces over large, monolithic ones.
*   [ ] **Day 39:** **D**ependency Inversion Principle (DIP). Define, depend on abstractions, not concretions. Relation to IoC/DI frameworks (like Spring).
*   [ ] **Day 40:** SOLID Principles Review: Discuss how all 5 principles work together. Analyze a slightly larger code example for overall SOLID adherence. Discuss trade-offs.
*   **Weekend:**
    *   [ ] Review LSP, ISP, DIP thoroughly.
    *   [ ] Review all 5 SOLID principles together.
    *   [ ] Analyze code snippets online or from personal projects for SOLID violations and suggest improvements. Explain the "why" behind each principle.

---

### Phase 2: Design Patterns & Spring Boot (Months 3-4)

#### Month 3: Design Patterns

##### Week 9: Creational Patterns

*   [ ] **Day 41:** Intro to Design Patterns: Purpose, Benefits. Categories (Creational, Structural, Behavioral).
*   [ ] **Day 42:** Singleton Pattern: Different implementations (eager, lazy, static block, enum), thread safety considerations, use cases, drawbacks.
*   [ ] **Day 43:** Factory Method Pattern: Define, structure, use cases (defer instantiation to subclasses), implementation.
*   [ ] **Day 44:** Abstract Factory Pattern: Define, structure, use cases (families of related objects), implementation, compare with Factory Method.
*   [ ] **Day 45:** Builder Pattern: Define, Effective Java approach (static nested builder), use cases (complex object construction, immutability).
*   **Weekend:**
    *   [ ] Review Singleton, Factory Method, Abstract Factory, Builder patterns.
    *   [ ] Implement simple examples for each pattern.
    *   [ ] Identify scenarios from experience or libraries where each pattern might be used.

##### Week 10: Structural Patterns (Part 1)

*   [ ] **Day 46:** Adapter Pattern: Define, purpose (making incompatible interfaces work together).
*   [ ] **Day 47:** Adapter Pattern Implementation: Object Adapter (composition) vs Class Adapter (inheritance - less common in Java). Examples.
*   [ ] **Day 48:** Decorator Pattern: Define, purpose (adding responsibilities dynamically without subclassing).
*   [ ] **Day 49:** Decorator Pattern Implementation: Structure, discuss Java I/O (`BufferedReader(new FileReader(...))`) as an example.
*   [ ] **Day 50:** Facade Pattern: Define, purpose (providing a simplified interface to a complex subsystem). Implementation.
*   **Weekend:**
    *   [ ] Review Adapter, Decorator, Facade patterns.
    *   [ ] Implement simple examples for each.
    *   [ ] Compare Decorator vs Inheritance for adding functionality. Discuss Facade benefits.

##### Week 11: Structural Patterns (Part 2) & Behavioral Patterns (Part 1)

*   [ ] **Day 51:** Proxy Pattern: Define, purpose (controlling access to an object), types (virtual, protection, remote - conceptual).
*   [ ] **Day 52:** Composite Pattern: Define, purpose (treating individual objects and compositions uniformly - tree structures). Implementation.
*   [ ] **Day 53:** Introduction to Behavioral Patterns: Focus on communication and assignment of responsibilities between objects.
*   [ ] **Day 54:** Strategy Pattern: Define, purpose (defining a family of algorithms, encapsulating each, making them interchangeable).
*   [ ] **Day 55:** Strategy Pattern Implementation: Structure, relationship to OCP. Example (e.g., different sorting strategies).
*   **Weekend:**
    *   [ ] Review Proxy, Composite, Strategy patterns.
    *   [ ] Implement examples.
    *   [ ] Think about how Strategy differs from simple conditional logic or Template Method (preview).

##### Week 12: Behavioral Patterns (Part 2)

*   [ ] **Day 56:** Observer Pattern: Define, purpose (one-to-many dependency, automatic notification).
*   [ ] **Day 57:** Observer Pattern Implementation: Structure (Subject, Observer interfaces), examples (event listeners in GUIs, message queues conceptually).
*   [ ] **Day 58:** Template Method Pattern: Define, purpose (defining algorithm skeleton, deferring steps to subclasses).
*   [ ] **Day 59:** Template Method Implementation: Structure (abstract class with template method and abstract/hook methods). Contrast with Strategy.
*   [ ] **Day 60:** Command Pattern (Optional but common): Define, purpose (encapsulating a request as an object). Structure.
*   **Weekend:**
    *   [ ] Review Observer, Template Method, Command patterns.
    *   [ ] Implement examples.
    *   [ ] Revisit all patterns covered so far - make flashcards or notes summarizing purpose and structure.

#### Month 4: Spring Boot Core & Application Development

##### Week 13: Spring Framework & Spring Boot Introduction

*   [ ] **Day 61:** Why Spring? Core Concepts: Inversion of Control (IoC) Container, Dependency Injection (DI). Benefits.
*   [ ] **Day 62:** Spring Boot Introduction: Goals (convention over configuration), Auto-configuration, Starters. Set up a project (Spring Initializr, Maven/Gradle basics). Project Structure.
*   [ ] **Day 63:** Spring Core Annotations: `@Component`, `@Service`, `@Repository`, `@Configuration`. Component Scanning (`@ComponentScan`).
*   [ ] **Day 64:** Dependency Injection: `@Autowired`. Constructor Injection (preferred) vs. Setter/Field Injection. Qualifiers (`@Qualifier`, `@Primary`).
*   [ ] **Day 65:** Spring Bean Lifecycle (conceptual understanding: instantiation, population, initialization, destruction). Bean Scopes (`singleton`, `prototype`, `request`, `session`).
*   **Weekend:**
    *   [ ] Review Spring Core concepts (IoC, DI).
    *   [ ] Review Spring annotations (`@Component` hierarchy, `@Autowired`, `@Qualifier`, `@Primary`).
    *   [ ] Set up a simple Spring Boot "Hello World" project.
    *   [ ] Practice DI with different annotations and injection types (constructor, setter).

##### Week 14: Spring Boot Web (REST APIs)

*   [ ] **Day 66:** Intro to Spring MVC. Role of `DispatcherServlet`. Request lifecycle (conceptual understanding).
*   [ ] **Day 67:** Building REST Controllers: `@RestController` (combines `@Controller` and `@ResponseBody`). `@RequestMapping` (class/method level).
*   [ ] **Day 68:** Handling HTTP Methods: `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`.
*   [ ] **Day 69:** Request Handling: Extracting data using `@PathVariable`, `@RequestParam`, `@RequestBody`. Automatic JSON conversion (Jackson).
*   [ ] **Day 70:** Response Handling: Returning data (POJOs automatically converted to JSON). Setting Response Status (`@ResponseStatus`, `ResponseEntity`). Basic Error Handling (`@ResponseStatus` on exceptions).
*   **Weekend:**
    *   [ ] Build a simple REST API (e.g., managing a list of Tasks/Notes in memory).
    *   [ ] Implement GET (all, by ID), POST, PUT, DELETE endpoints.
    *   [ ] Practice using `@PathVariable`, `@RequestParam`, `@RequestBody`.
    *   [ ] Test endpoints using Postman or curl.

##### Week 15: Spring Data JPA

*   [ ] **Day 71:** Intro to ORM (Object-Relational Mapping) & JPA (Java Persistence API). Configure `application.properties`/`yml` for database connection (start with H2 in-memory).
*   [ ] **Day 72:** Entities: `@Entity` annotation. Primary Keys: `@Id`, `@GeneratedValue`. Basic column mapping: `@Column`.
*   [ ] **Day 73:** Spring Data Repositories: `JpaRepository` interface. Basic CRUD operations out-of-the-box (`save()`, `findById()`, `findAll()`, `deleteById()`).
*   [ ] **Day 74:** Derived Query Methods: Creating queries automatically from method names (e.g., `findByTitle(String title)`, `findByStatusAndPriority(...)`).
*   [ ] **Day 75:** Custom Queries: `@Query` annotation for writing custom JPQL (Java Persistence Query Language) or Native SQL queries. Named parameters.
*   **Weekend:**
    *   [ ] Integrate H2 database with your REST API project.
    *   [ ] Define an `@Entity` for your resource (e.g., Task).
    *   [ ] Create a `JpaRepository` interface.
    *   [ ] Implement full CRUD functionality using the repository.
    *   [ ] Practice writing a few derived query methods and one `@Query`.

##### Week 16: Advanced Spring Boot Topics

*   [ ] **Day 76:** Global Exception Handling: `@ControllerAdvice`, `@ExceptionHandler`. Creating custom exception classes and handlers. Returning standardized error responses.
*   [ ] **Day 77:** Validation: Bean Validation API (`javax.validation` / `jakarta.validation`). Using annotations like `@NotNull`, `@Size`, `@Email` on DTOs/Entities. Using `@Valid` in controller methods.
*   [ ] **Day 78:** Profiles: Managing environment-specific configurations using `@Profile` annotation and `application-{profile}.properties` files (e.g., `dev`, `test`, `prod`).
*   [ ] **Day 79:** Introduction to Spring Boot Actuator: Exposing operational endpoints (`/actuator/health`, `/actuator/info`, `/actuator/metrics`, etc.). Configuration.
*   [ ] **Day 80:** Introduction to Spring Boot Testing: Dependencies (`spring-boot-starter-test`). JUnit 5 basics (`@Test`). `@SpringBootTest` for loading application context. Mocking dependencies using `@MockBean` and Mockito basics (`when`, `verify`).
*   **Weekend:**
    *   [ ] Add global exception handling (`@ControllerAdvice`) to your project.
    *   [ ] Add validation (`@Valid` and validation annotations) to your API endpoints.
    *   [ ] Configure profiles (e.g., different DB settings for dev/test).
    *   [ ] Write basic unit tests for a Service class (using `@MockBean` for repository).
    *   [ ] Write basic integration tests for a Controller endpoint (using `MockMvc`).
    *   [ ] Explore available Actuator endpoints on your running application.

---

### Phase 3: DSA Intensive & Interview Preparation (Months 5-6)

#### Month 5: Data Structures & Algorithms Fundamentals

##### Week 17: Complexity & Basic Data Structures

*   [ ] **Day 81:** Introduction to DSA: Why it matters for backend roles (efficiency, problem-solving). Interview context.
*   [ ] **Day 82:** Big O Notation: Define Time & Space Complexity. Analyze common complexities: O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!). Best/Average/Worst case.
*   [ ] **Day 83:** Practice Complexity Analysis: Analyze simple loops, nested loops, recursive functions (e.g., factorial, fibonacci).
*   [ ] **Day 84:** Data Structures: Arrays (fixed size vs dynamic - `ArrayList`). Pros/Cons, Operations (access, search, insert, delete), Complexity. Practice: Array manipulation problems (LeetCode Easy - e.g., Two Sum, Max Subarray).
*   [ ] **Day 85:** Data Structures: Linked Lists (Singly, Doubly). Concept, Implementation (Node class), Operations (insert, delete, search), Complexity. Practice: Linked List problems (LeetCode Easy - e.g., Reverse Linked List, Detect Cycle).
*   **Weekend:**
    *   [ ] Review Big O Notation concepts thoroughly.
    *   [ ] Review Arrays and Linked Lists (pros, cons, complexities).
    *   [ ] Solve 5-10 LeetCode Easy problems focusing on Arrays and Linked Lists.
    *   [ ] Practice explaining the time/space complexity of your solutions.

##### Week 18: Linear Data Structures & Hashing

*   [ ] **Day 86:** Data Structures: Stacks (LIFO). Concept, Operations (`push`, `pop`, `peek`), Implementation using Array or LinkedList. Use cases (function calls, undo, expression evaluation).
*   [ ] **Day 87:** Practice: Stack problems (LeetCode Easy/Medium - e.g., Valid Parentheses, Min Stack).
*   [ ] **Day 88:** Data Structures: Queues (FIFO). Concept, Operations (`enqueue`, `dequeue`, `peek`), Implementation using Array (circular) or LinkedList. Use cases (BFS, task scheduling).
*   [ ] **Day 89:** Practice: Queue problems (LeetCode Easy/Medium - e.g., Implement Stack using Queues, Number of Recent Calls). Deques (`ArrayDeque`).
*   [ ] **Day 90:** Hashing: Concept of Hash Functions (good properties), Collision Resolution (Separate Chaining, Open Addressing - Linear/Quadratic Probing). `HashMap`/`HashSet` internals revisited. Practice: HashMap/Set problems (LeetCode Easy/Medium - e.g., Contains Duplicate, Group Anagrams).
*   **Weekend:**
    *   [ ] Review Stacks, Queues, Deques, Hashing concepts.
    *   [ ] Implement Stack and Queue from scratch (using Array/LinkedList).
    *   [ ] Solve 5-10 LeetCode Easy/Medium problems using these data structures. Focus on identifying when to use which.

##### Week 19: Trees (Part 1)

*   [ ] **Day 91:** Intro to Trees: Terminology (Root, Node, Edge, Parent, Child, Leaf, Height, Depth, Subtree). Types (Binary Tree, N-ary Tree).
*   [ ] **Day 92:** Binary Search Trees (BST): Definition, Properties (left < root < right). Operations: Search, Insert, Delete (conceptual understanding of cases). Complexity.
*   [ ] **Day 93:** Practice Implementing BST Operations (Search, Insert) in Java.
*   [ ] **Day 94:** Tree Traversals: Depth-First Search (DFS) - In-order, Pre-order, Post-order. Recursive and Iterative (using Stack) implementations.
*   [ ] **Day 95:** Practice: BST and Traversal problems (LeetCode Easy/Medium - e.g., Validate BST, Max Depth of Binary Tree, Inorder Traversal).
*   **Weekend:**
    *   [ ] Review Tree terminology, BST properties, and DFS traversals (In/Pre/Post).
    *   [ ] Implement DFS traversals both recursively and iteratively.
    *   [ ] Solve LeetCode problems involving BST operations and traversals.

##### Week 20: Trees (Part 2) & Heaps

*   [ ] **Day 96:** Tree Traversals: Breadth-First Search (BFS) / Level-order Traversal (using Queue). Implementation.
*   [ ] **Day 97:** Balanced Trees: Concept only - Why needed? Examples (AVL, Red-Black Tree - understand they exist to maintain O(log n) operations). Not usually required to implement in interviews.
*   [ ] **Day 98:** Heaps (Binary Heap): Concept (Min-Heap, Max-Heap), Properties (Complete Binary Tree, Heap Property). Implementation using Arrays. Operations: Insert (`siftUp`), Extract-Min/Max (`siftDown`), Heapify. Complexity.
*   [ ] **Day 99:** Priority Queues: Concept. Implementation using Heaps. Java `PriorityQueue` class usage and customization (Comparator).
*   [ ] **Day 100:** Practice: Heap/Priority Queue problems (LeetCode Medium - e.g., Kth Largest Element in an Array, Top K Frequent Elements, Merge K Sorted Lists).
*   **Weekend:**
    *   [ ] Review BFS/Level-order traversal.
    *   [ ] Review Heap concepts, operations, and implementation using arrays.
    *   [ ] Review Priority Queues and Java's `PriorityQueue`.
    *   [ ] Solve LeetCode Medium problems related to BFS, Heaps, Priority Queues.

#### Month 6: Algorithms, System Design & Interview Readiness

##### Week 21: Sorting & Searching Algorithms

*   [ ] **Day 101:** Simple Sorting Algorithms: Bubble Sort, Selection Sort, Insertion Sort. Implementation, Time/Space Complexity (O(n^2)). Best case for Insertion Sort.
*   [ ] **Day 102:** Efficient Sorting Algorithms: Merge Sort. Divide and Conquer strategy. Implementation (recursive), Time/Space Complexity (O(n log n), O(n) space). Stable sort.
*   [ ] **Day 103:** Efficient Sorting Algorithms: Quick Sort. Divide and Conquer strategy. Implementation (recursive, partitioning), Time/Space Complexity (Average O(n log n), Worst O(n^2)), In-place sort (O(log n) space for recursion stack). Pivot selection impact.
*   [ ] **Day 104:** Comparison of Sorting Algorithms. Heap Sort (using Heap knowledge). Java's `Arrays.sort()` / `Collections.sort()` (uses TimSort - hybrid). When to use which?
*   [ ] **Day 105:** Searching Algorithms: Linear Search (O(n)). Binary Search (O(log n) - requires sorted array). Implementation (iterative, recursive). Practice: Binary Search problems (LeetCode Easy/Medium - e.g., Search Insert Position, Find Minimum in Rotated Sorted Array).
*   **Weekend:**
    *   [ ] Review all sorting algorithms covered (implementations, complexities, stability, space).
    *   [ ] Implement Merge Sort & Quick Sort from scratch.
    *   [ ] Review Binary Search implementation details (handling indices, termination condition).
    *   [ ] Solve LeetCode problems requiring sorting or binary search (including variations on BS).

##### Week 22: Graphs

*   [ ] **Day 106:** Intro to Graphs: Terminology (Vertex, Edge, Directed, Undirected, Weighted, Cycle). Representation: Adjacency Matrix vs Adjacency List (Pros/Cons, Implementation).
*   [ ] **Day 107:** Graph Traversal: Breadth-First Search (BFS). Algorithm (using Queue). Use Cases (shortest path in unweighted graph, level order traversal). Implementation.
*   [ ] **Day 108:** Practice: BFS problems (LeetCode Medium - e.g., Number of Islands, Rotting Oranges).
*   [ ] **Day 109:** Graph Traversal: Depth-First Search (DFS). Algorithm (using Stack - iterative, or Recursion). Use Cases (cycle detection, connected components, topological sort). Implementation.
*   [ ] **Day 110:** Practice: DFS problems (LeetCode Medium - e.g., Course Schedule, Clone Graph).
*   **Weekend:**
    *   [ ] Review Graph terminology, representations (Adj List preferred for sparse graphs).
    *   [ ] Review BFS and DFS algorithms (implementations, complexities, use cases).
    *   [ ] Implement both BFS and DFS traversals (iterative & recursive for DFS).
    *   [ ] Solve LeetCode Medium graph problems (mix of BFS/DFS).

##### Week 23: System Design & Behavioral Prep

*   [ ] **Day 111:** Introduction to System Design: Goals (Scalability, Availability, Reliability, Latency, Consistency). CAP Theorem (Consistency, Availability, Partition Tolerance - basic understanding). Trade-offs.
*   [ ] **Day 112:** Common Components: Load Balancers (types), Databases (SQL vs NoSQL - when to use which?), Caching (Client-side, Server-side, CDN, Database; Strategies - Cache-Aside, Read-Through, Write-Through, Write-Back), Message Queues (purpose).
*   [ ] **Day 113:** System Design Case Study Walkthrough (e.g., TinyURL): Requirements gathering, API Design, Database Schema, High-level components, Basic Scaling (read replicas, sharding concept). Focus on the process.
*   [ ] **Day 114:** Back-of-the-envelope estimations: Calculating Storage, Bandwidth, QPS needs. API Design Best Practices (REST principles, versioning, idempotency).
*   [ ] **Day 115:** Behavioral Questions: Importance. STAR Method (Situation, Task, Action, Result). Prepare 3-5 detailed stories covering: challenging project, teamwork/collaboration, handling conflict, failure/mistake and learning, success/achievement, dealing with ambiguity.
*   **Weekend:**
    *   [ ] Practice outlining a System Design problem (e.g., Instagram Feed, Twitter Search - focus on components and data flow). Use a framework (e.g., Clarify -> Estimate -> API -> DB -> High-Level -> Deep Dive -> Scale/Bottlenecks).
    *   [ ] Write down and refine STAR stories. Practice telling them aloud.
    *   [ ] Review common behavioral questions online and think about your answers.

##### Week 24: Mock Interviews & Refinement

*   [ ] **Day 116:** Mock DSA Interview (focus on 1-2 Medium problems). Get feedback on communication, problem-solving approach, coding clarity, complexity analysis. Use peer/platform (Pramp, LeetCode Mock).
*   [ ] **Day 117:** Mock Java/Spring Conceptual Interview. Prepare questions on Core Java, Java 8, SOLID, Patterns, Spring Boot internals, REST, JPA. Get feedback on clarity and depth.
*   [ ] **Day 118:** Mock System Design Interview (High-level discussion of a common problem). Focus on interaction, clarifying requirements, exploring trade-offs, drawing diagrams.
*   [ ] **Day 119:** Mock Behavioral Interview. Practice answering questions using STAR method based on prepared stories. Get feedback on delivery and content.
*   [ ] **Day 120:** Combined Mock Interview (e.g., 1 DSA + quick concepts + behavioral). Simulate a real interview round. Final review based on feedback.
*   **Daily during Week 24:**
    *   [ ] Solve 1-2 LeetCode Medium problems (timed).
    *   [ ] Review concepts identified as weak during mocks.
    *   [ ] Refine explanation of personal projects on resume.
*   **Weekend:**
    *   [ ] Analyze all mock interview feedback critically.
    *   [ ] Perform targeted revision of weakest areas (DSA topics, Core Java, Spring, System Design).
    *   [ ] Final resume check - ensure it highlights skills learned and projects.
    *   [ ] Relax and build confidence before starting active interviewing.

---

**Remember:** This is a template. Adjust the pace based on your understanding. Consistency is key. Good luck!