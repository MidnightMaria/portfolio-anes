type GridItem = {
  id: number;
  title: string;
  className: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
};

// ================= NAV =================
export const navItems = [
  { name: "Home", link: "#" },
  { name: "Experience", link: "#experience" },
  { name: "Skillset", link: "#skill" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Certificates", link: "#certificates" },
  { name: "Community Teaching", link: "#community-teaching" }
];

// ================= GRID =================
export const gridItems: GridItem[] = [
  {

    id: 1,
    title: "My Skill Set",
    className: "lg:col-span-6 md:col-span-6 md:row-span-12",
  },
];

// ================= TYPES =================
export type Project = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  github: string;

  details?: {
    overview: string;
    screenshots?: { title: string; img: string }[];
    features?: string[];
    systemDesign?: string[];
    pipeline?: string[];
    architecture?: string[];
    dataModel?: string[];
    challenges?: string;
    impact?: string;
  };
};

// ================= PROJECTS =================
export const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management Service",
    description:
      "Core microservice for managing products, multi-warehouse inventory, and transaction-based stock movements.",

    thumbnail: "/ims.png",

    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA / Hibernate",
      "Docker",
      "REST API",
    ],

    github: "https://github.com/MidnightMaria/inventory-management-systems",

    details: {
      overview:
        "Central service responsible for maintaining consistent inventory data across multiple warehouses using a transaction-based approach.",

      screenshots: [
        { title: "Dashboard", img: "/projects/ims/dashboard.png" },
        { title: "Products", img: "/projects/ims/products.png" },
        { title: "Warehouses", img: "/projects/ims/warehouse.png" },
        { title: "Inventory Movements", img: "/projects/ims/movements.png" },
        { title: "Database (Docker)", img: "/projects/ims/docker-db.png" },
        { title: "ERD", img: "/projects/ims/erd.png" },
      ],

      features: [
        "SKU-based product identification",
        "Multi-warehouse inventory tracking",
        "Transaction-based stock movement system",
        "Stock transfer between warehouses",
        "Audit trail for all inventory changes",
      ],

      systemDesign: [
        "Microservices architecture",
        "REST API communication",
        "Relational database with strong constraints",
        "Entities: products, warehouses, inventory_items, movements",
      ],

      architecture: [
        "Single source of truth for inventory",
        "Integrated with Retail and Data Science services",
        "Frontend communicates via REST API",
      ],

      dataModel: [
        "Product identified by SKU",
        "Inventory per warehouse",
        "Movements stored as immutable transactions",
      ],

      challenges:
        "Maintaining data consistency during concurrent inventory updates.",

      impact:
        "Provides a reliable foundation for supply chain operations and analytics.",
    },
  },

  {
    id: 2,
    title: "Data Science Service",
    description:
      "End-to-end data science microservice for demand forecasting and inventory optimization.",

    thumbnail: "/data-science-service.png",

    techStack: [
      "Python",
      "Prophet",
      "XGBoost",
      "Pandas",
      "Docker",
      "REST API",
    ],

    github: "https://github.com/MidnightMaria/data-science-service",

    details: {
      overview:
        "Transforms transactional data into actionable insights through forecasting and optimization pipelines.",

      screenshots: [
        { title: "Data Science Dashboard Overview", img: "/projects/ds/dashboard.png" },
        { title: "Inventory Optimization Results (EOQ, ROP, Safety Stock)", img: "/projects/ds/inventory-opt.png" },
        { title: "Demand Forecast Visualization (Hybrid Prophet + XGBoost)", img: "/projects/ds/demand-forecast.png" },
        { title: "EDA — Sales Distribution Analysis", img: "/projects/ds/eda.png" },
        { title: "EDA — Seasonality & Temporal Patterns", img: "/projects/ds/eda-2.png" },
        { title: "EDA — Demand Variability & Coefficient of Variation", img: "/projects/ds/eda-3.png" },
        { title: "Time Series Behavior & Autocorrelation Analysis", img: "/projects/ds/time-series.png" },
        { title: "Model Evaluation Dashboard (MAPE Comparison)", img: "/projects/ds/model-evaluation.png" },
        { title: "Model Performance Comparison (Prophet vs Hybrid)", img: "/projects/ds/evaluation-2.png" },
        { title: "Average MAPE per Store Analysis", img: "/projects/ds/average-mape.png" },
      ],

      features: [
        "End-to-end data pipeline",
        "Time-series forecasting per store/product",
        "Hybrid Prophet + XGBoost model",
        "Model evaluation using MAPE",
        "Inventory optimization (EOQ, ROP, Safety Stock)",
      ],

      systemDesign: [
        "Integrated with Inventory and Retail services",
        "Batch processing pipeline",
        "Decoupled analytics layer",
        "CSV-based intermediate storage",
      ],

      architecture: [
        "Consumes data from multiple services",
        "Processes via ML pipeline",
        "Exposes results via REST API",
        "Frontend visualizes analytics",
      ],

      dataModel: [
        "Time-series dataset",
        "Feature-engineered dataset",
        "Forecast output",
        "Optimization dataset",
      ],

      pipeline: [
        "Data ingestion → preprocessing",
        "Feature engineering",
        "Model training (Prophet + XGBoost)",
        "Evaluation (MAPE)",
        "Forecast generation",
        "Inventory optimization",
      ],

      challenges:
        "Balancing interpretability and predictive performance in a hybrid model.",

      impact:
        "Improves demand prediction accuracy and inventory efficiency.",
    },
  },

  {
    id: 3,
    title: "Supply Chain Service",
    description:
      "Microservice for managing suppliers and purchase order workflows.",

    thumbnail: "/supply-chain-2.png",

    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA / Hibernate",
      "Docker",
      "REST API",
    ],

    github: "https://github.com/MidnightMaria/supply-chain-service",

    details: {
      overview:
        "Handles procurement operations including supplier management and purchase order workflows.",

      screenshots: [
        { title: "Supply Chain Dashboard Overview", img: "/projects/supply-chain/dashboard.png" },
        { title: "Supplier Management Interface", img: "/projects/supply-chain/suppliers.png" },
        { title: "Purchase Order Management", img: "/projects/supply-chain/purchase-orders.png" },
        { title: "Database View (PostgreSQL)", img: "/projects/supply-chain/db.png" },
        { title: "Entity Relationship Diagram (ERD)", img: "/projects/supply-chain/erd.png" },
      ],

      features: [
        "Supplier management",
        "Purchase order tracking",
        "Order item management",
        "Procurement workflow",
      ],

      systemDesign: [
        "RESTful microservice",
        "Relational schema",
        "Entities: supplier, purchase_order, items",
      ],

      architecture: [
        "Acts as procurement layer",
        "Integrates with Inventory Service",
        "Supports stock replenishment",
      ],

      dataModel: [
        "Supplier → Purchase Order → Items",
        "Foreign key constraints for consistency",
      ],

      challenges:
        "Maintaining relational integrity while scaling procurement workflows.",

      impact:
        "Improves procurement efficiency and traceability.",
    },
  },

  {
    id: 4,
    title: "Retail Service",
    description:
      "Microservice for managing customer transactions, orders, and retail warehouse operations.",

    thumbnail: "/retail-project.png",

    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA / Hibernate",
      "Docker",
      "REST API",
    ],

    github: "https://github.com/MidnightMaria/retail-service",

    details: {
      overview:
        "Handles customer transactions independently while integrating with inventory for stock replenishment.",

      screenshots: [
        { title: "Retail Dashboard Overview", img: "/projects/retail/dashboard.png" },
        { title: "Customer Management Interface", img: "/projects/retail/customers.png" },
        { title: "Product Management Interface", img: "/projects/retail/products.png" },
        { title: "Retail Warehouse Management", img: "/projects/retail/warehouse.png" },
        { title: "Stock Management per Warehouse", img: "/projects/retail/stock.png" },
        { title: "Order Management Interface", img: "/projects/retail/orders.png" },
        { title: "Database Schema (PostgreSQL)", img: "/projects/retail/db.png" },
        { title: "Entity Relationship Diagram (ERD)", img: "/projects/retail/erd.png" },
      ],

      features: [
        "Customer and order management",
        "Real-time stock updates",
        "Multi-warehouse support",
        "Order history tracking",
      ],

      systemDesign: [
        "Independent retail microservice",
        "Relational database design",
        "Entities: customers, orders, products",
      ],

      architecture: [
        "Handles transactional layer",
        "Integrates with Inventory Service",
        "Decoupled from central inventory",
      ],

      dataModel: [
        "Customer → Order → Order Items",
        "Retail warehouse and stock tracking",
      ],

      challenges:
        "Synchronizing with inventory without tight coupling.",

      impact:
        "Provides scalable and realistic retail operations.",
    },
  },

  {
    id: 5,
    title: "Bootcamp Candidate Interview API",
    description:
      "Backend system to manage candidate recruitment workflows for HR and interviewers using Go (Gin Gonic).",

    thumbnail: "/bootcamp_interview_api.jpg",

    techStack: ["Go", "PostgreSQL"],

    github:
      "https://github.com/nesngenes/Bootcamp-Candidate-Interview-Application",

    details: {
      overview:
        "Backend API for managing candidate interviews, scheduling, and evaluation workflows.",

      features: [
        "Candidate registration and management",
        "Interview scheduling",
        "Evaluation with scoring and feedback",
        "Candidate status tracking",
        "REST API integration",
      ],

      systemDesign: [
        "Go with Gin Gonic framework",
        "Layered architecture",
        "PostgreSQL database",
        "Entities: candidates, interviews, evaluations",
      ],

      architecture: [
        "Single backend service",
        "Used by HR and interviewers",
        "Supports frontend and Postman usage",
      ],

      dataModel: [
        "Candidate → Interview → Evaluation",
        "Multiple interviews per candidate",
        "Evaluation stores score and feedback",
      ],

      challenges:
        "Keeping workflow simple while supporting multiple roles.",

      impact:
        "Streamlines recruitment process and improves collaboration.",
    },
  },

  {
    id: 6,
    title: "Enigma Laundry Console App",
    description:
      "CLI application for managing laundry operations with PostgreSQL persistence.",
    thumbnail: "/agnes-laundry.png",
    techStack: ["Go", "PostgreSQL"],
    github: "https://github.com/nesngenes/enigmalaundry-console-app",
    details: {
  overview:
    "CLI-based application for managing laundry business operations including customer orders, services, and transactions using PostgreSQL.",

  features: [
    "Customer and order management",
    "Service selection and pricing calculation",
    "Transaction recording and history tracking",
    "CLI-based interaction for simple usage",
  ],

  systemDesign: [
    "Built with Go (Golang)",
    "CLI-based interface",
    "PostgreSQL relational database",
    "CRUD-based operations",
  ],

  architecture: [
    "Single application (monolithic CLI)",
    "Direct interaction between CLI and database",
  ],

  dataModel: [
    "Customer → Order → Service",
    "Transaction records with pricing and timestamps",
  ],

  challenges:
    "Designing a structured system without a UI while keeping CLI interaction user-friendly.",

  impact:
    "Provides a simple system to manage laundry operations and understand backend fundamentals.",
}
  },

  {
    id: 7,
    title: "Aone (E-commerce)",
    description:
      "Full-stack e-commerce platform using MERN stack with Stripe integration.",
    thumbnail: "/aone.png",
    techStack: ["React JS", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/nesngenes/aone",
    details: {
  overview:
    "Full-stack e-commerce platform for selling volleyball equipment with payment integration using Stripe.",

  features: [
    "Product catalog and browsing",
    "User authentication and account management",
    "Shopping cart and checkout system",
    "Online payment integration using Stripe",
  ],

  systemDesign: [
    "MERN stack (MongoDB, Express, React, Node.js)",
    "RESTful API for backend services",
    "JWT-based authentication",
  ],

  architecture: [
    "Frontend (React) communicates with backend API",
    "Backend handles business logic and payment processing",
    "MongoDB used for data persistence",
  ],

  dataModel: [
    "User → Cart → Order",
    "Product catalog with pricing and stock",
  ],

  challenges:
    "Integrating secure payment flow and handling user authentication.",

  impact:
    "Simulates real-world e-commerce workflow with end-to-end functionality.",
}
  },

  {
    id: 8,
    title: "LaBuena Cafe",
    description:
      "Cafe website with Google OAuth authentication and Mapbox integration.",
    thumbnail: "/labuena-ver-2.png",
    techStack: ["React JS", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/nesngenes/labuenacafeMERN",
    details: {
  overview:
    "Cafe website with authentication and location-based features using Google OAuth and Mapbox integration.",

  features: [
    "User authentication with Google OAuth",
    "Cafe branch visualization using Mapbox",
    "Product and content display",
    "Responsive web interface",
  ],

  systemDesign: [
    "MERN stack architecture",
    "External API integration (Google OAuth, Mapbox)",
    "RESTful backend services",
  ],

  architecture: [
    "Frontend interacts with backend API",
    "Backend handles authentication and data",
    "External APIs used for maps and login",
  ],

  dataModel: [
    "User accounts with authentication",
    "Cafe locations and branch data",
  ],

  challenges:
    "Integrating third-party APIs (OAuth & Mapbox) and managing authentication flow.",

  impact:
    "Enhances user experience with location-based features and secure login system.",
}
  },
   {
    id: 9,
    title: "Indonesian Inflation Forecasting",
    description:
      "Time-series forecasting project analyzing Indonesian monthly inflation using macroeconomic indicators and comparing ARIMA, SARIMAX, and XGBoost models.",

    thumbnail: "/project-inflation-forecasting.png",

    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Statsmodels",
      "Scikit-learn",
      "XGBoost",
      "Time Series",
    ],

    github: "https://github.com/MidnightMaria/final-inflation-forecast",

    details: {
      overview:
        "Analyzed and forecasted Indonesian monthly inflation using historical data from 2009–2025 and macroeconomic indicators including BI Rate, USD/IDR exchange rate, and Brent crude oil prices.",

      screenshots: [
        {
          title: "Monthly Inflation Trend (2009–2025)",
          img: "/projects/inflation-forecasting/figures/inflation_trend.png",
        },
        {
          title: "BI Rate Trend (2009–2025)",
          img: "/projects/inflation-forecasting/figures/bi_rate_trend.png",
        },
        {
          title: "USD/IDR Exchange Rate (2009–2025)",
          img: "/projects/inflation-forecasting/figures/usd_idr_trend.png",
        },
        {
          title: "Brent Oil Price (2009–2025)",
          img: "/projects/inflation-forecasting/figures/brent_trend.png",
        },
        {
          title: "Correlation Matrix",
          img: "/projects/inflation-forecasting/figures/correlation_heatmap.png",
        },
        {
          title: "ARIMA Prediction vs Actual Inflation",
          img: "/projects/inflation-forecasting/figures/arima_prediction.png",
        },
        {
          title: "SARIMAX Prediction vs Actual Inflation",
          img: "/projects/inflation-forecasting/figures/sarimax_prediction.png",
        },
        {
          title: "XGBoost Prediction vs Actual Inflation",
          img: "/projects/inflation-forecasting/figures/xgboost_prediction.png",
        },
      ],

      features: [
        "Exploratory data analysis of Indonesian inflation",
        "Analysis of macroeconomic indicators",
        "Correlation analysis between inflation and external variables",
        "Time-series forecasting using ARIMA",
        "Exogenous variable forecasting using SARIMAX",
        "Machine learning forecasting using XGBoost",
        "Model evaluation using MAE and RMSE",
        "Time-series cross-validation and hyperparameter tuning",
      ],

      pipeline: [
        "Data collection and integration",
        "Data preprocessing and cleaning",
        "Exploratory data analysis",
        "Stationarity testing using ADF",
        "ACF and PACF analysis",
        "ARIMA modeling",
        "SARIMAX modeling with macroeconomic variables",
        "Feature engineering for XGBoost",
        "Time-series cross-validation",
        "Model evaluation and comparison",
      ],

      systemDesign: [
        "Python-based data science pipeline",
        "Time-series forecasting workflow",
        "Statistical and machine learning model comparison",
        "Macroeconomic variables used as external predictors",
      ],

      dataModel: [
        "Monthly Indonesian inflation",
        "BI Rate",
        "USD/IDR exchange rate",
        "Brent crude oil price",
        "Lagged inflation features",
        "Calendar-based features",
      ],

      challenges:
        "Capturing highly volatile inflation movements while maintaining reliable forecasting performance across statistical and machine learning approaches.",

      impact:
        "Demonstrates an end-to-end time-series forecasting workflow combining statistical modeling, macroeconomic analysis, and machine learning.",
    },
  },
];

// ================= CERTIFICATES =================
export const certificates = [
  {
    id: 1,
    title: "Enigma Camp Bootcamp (Batch #7)",
    image: "/enigma-certif.png",
    link: "https://drive.google.com/file/d/1y66iYwefafwGv_Rc2L89K1JSXs2yWFeO/view",
  },
  {
    id: 2,
    title: "Udemy Web Developer Bootcamp",
    image: "/udemy-certif.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-20eb5f53-a87f-4bd6-a0ea-a614fb5619da.jpg",
  },
];

// ================= EXPERIENCE =================
export const workExperience = [
   {
    id: 1,
    title: "Application Developer at PT. BANK NEGARA INDONESIA (PERSERO) TBK",
    desc: "Participated in the development of Card Systems, ATM and EDC transactional.",
    className: "md:col-span-2",
    thumbnail: "/credit-card.png",
  },
  {
    id: 2,
    title: "Lead Backend Developer at Bootcamp Candidate Interview API Project",
    desc: "Added advanced features, including email sending using Go Mail and seamless file uploads to Cloudinary.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/lead.png",
  },
  {
    id: 3,
    title: "Back End Developer in Website Sidang Project",
    desc: "Added Create, Read, Update, and Delete (CRUD) functionality using PHP Native, Used MySQL to store data, and Added Authentication & Authorization.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/database.png",
  }
];

// ================= SOCIAL =================
export const socialMedia = [
  { id: 1, icon: "/git.svg", link: "https://github.com" },
  { id: 2, icon: "/link.svg", link: "https://linkedin.com" },
];

export type Lesson = {
  id: number;
  title: string;
  description: string;
  images: string[];
  link?: string;
};

// ================= COMMUNITY TEACHING / LESSONS =================
export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Intro to Docker",
    description:
      "Created a structured lesson explaining Docker fundamentals for beginners, covering containers, images, Dockerfile, and running PostgreSQL inside containers. Engaged with learners and answered questions.",
    images: Array.from({ length: 22 }, (_, i) => `/agnes-docker-lesson/${i + 1}.jpg`),
    link: "#",
  },
  {
  id: 2,
  title: "Enterprise Security Introduction",
  description:
    "Created a small lesson about how security works in enterprise environments. Common practices implemented in large organizations are explained.",
  images: [
    "/cybersecurity-lesson/1.jpg",
    "/cybersecurity-lesson/2.jpg",
    "/cybersecurity-lesson/3.jpg",
    "/cybersecurity-lesson/4.jpg",
    "/cybersecurity-lesson/5.jpg",
    "/cybersecurity-lesson/6.jpg",
    "/cybersecurity-lesson/7.jpg",
    "/cybersecurity-lesson/8.jpg",
    "/cybersecurity-lesson/9.jpg",
  ],
    link: "#",
  },
  {
    id: 3,
    title: "Object-Oriented Programming (OOP) Fundamentals",
    description:
      "Designed and delivered a beginner-friendly lesson on Object-Oriented Programming. Covered core concepts such as objects, classes, encapsulation, inheritance, polymorphism, and abstraction using real-world analogies and Java code examples.",
    images: Array.from({ length: 18 }, (_, i) => `/oop-lesson/${i + 1}.jpg`),
    link: "#",
  },
];