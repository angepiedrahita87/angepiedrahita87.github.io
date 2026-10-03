/* Datos de la página. Para añadir un proyecto, copia un bloque de PROJECTS y edítalo.
   Texto como { es: "...", en: "..." }. Los enlaces solo se muestran si existen (lista `links` no vacía).
   "xxxxxxx" = dato pendiente. */
window.DATA = {
  // TODO: reemplazar xxxxxxx por tus datos reales. Los que sigan en xxxxxxx se muestran sin enlace.
  contact: {
    email: "angepiedrahita87@gmail.com",
    linkedin: "https://www.linkedin.com/in/maría-angélica-piedrahita-ramírez-416591337",
    github: "https://github.com/angepiedrahita87"
  },

  projects: [
    {
      id: "sparkies",
      featured: true,
      team: true,
      title: { es: "Sparkies: brecha educativa y de conectividad en Boyacá", en: "Sparkies: education and connectivity gap in Boyacá" },
      summary: {
        es: "Análisis de los 123 municipios de Boyacá para orientar política pública: dónde hay menor cobertura, más deserción y peor infraestructura.",
        en: "Analysis of Boyacá's 123 municipalities to guide public policy: where coverage is lowest, dropout highest and infrastructure weakest."
      },
      course: { es: "Procesamiento de Datos a Gran Escala, 2026", en: "Large-Scale Data Processing, 2026" },
      role: { es: "xxxxxxx", en: "xxxxxxx" }, // TODO: describe tu parte
      points: {
        es: [
          "Integración de 7 conjuntos de datos abiertos de datos.gov.co (conectividad de sedes educativas, internet fijo, Saber 11, UNIDOS, matrícula y cobertura/deserción) en un dataframe maestro de 123 filas y 36 variables.",
          "Limpieza y transformación con PySpark en clúster: normalización de nombres, outliers por percentil 99, índices de conectividad y agregaciones ponderadas. Metodología CRISP-DM.",
          "8 preguntas de negocio respondidas con correlaciones de Pearson y visualizaciones.",
          "Modelos supervisados con Spark MLlib: Random Forest y Regresión Logística, con validación cruzada y búsqueda de hiperparámetros. El mejor fue la Regresión Logística, con AUC en test de aproximadamente 0.75 y una brecha pequeña entre entrenamiento y prueba.",
          "Modelo no supervisado: K-Means (k=2) comparado con DBSCAN y GMM usando Silhouette, Davies-Bouldin y Calinski-Harabasz.",
          "Resultado: una lista de municipios priorizados como alerta temprana, con la advertencia explícita de que el conjunto de datos es pequeño y las métricas son inestables."
        ],
        en: [
          "Integrated 7 open datasets from datos.gov.co (school connectivity, fixed internet, Saber 11, UNIDOS, enrollment, and coverage/dropout) into a master dataframe of 123 rows and 36 variables.",
          "Cleaning and transformation with PySpark on a cluster: name normalization, outliers by 99th percentile, connectivity indices and weighted aggregations. CRISP-DM methodology.",
          "8 business questions answered with Pearson correlations and visualizations.",
          "Supervised models with Spark MLlib: Random Forest and Logistic Regression, with cross-validation and hyperparameter search. The best was Logistic Regression, with a test AUC of about 0.75 and a small train/test gap.",
          "Unsupervised model: K-Means (k=2) compared against DBSCAN and GMM using Silhouette, Davies-Bouldin and Calinski-Harabasz.",
          "Result: a list of municipalities prioritized as early warning, with an explicit caveat that the dataset is small and the metrics are unstable."
        ]
      },
      tech: ["PySpark", "Spark MLlib", "scikit-learn", "pandas", "SciPy", "matplotlib", "seaborn", "Jupyter"],
      links: [] // TODO: ej. { label: { es: "Repositorio", en: "Repository" }, url: "https://github.com/..." }
    },
    {
      id: "pentest",
      featured: true,
      team: true,
      title: { es: "Auditoría de seguridad: pentest en laboratorio", en: "Security audit: lab penetration test" },
      summary: {
        es: "Prueba de penetración completa en un laboratorio virtual aislado y autorizado, con máquinas intencionalmente vulnerables.",
        en: "Full penetration test in an isolated, authorized virtual lab with intentionally vulnerable machines."
      },
      course: { es: "Introducción a la Seguridad Informática, mayo 2026", en: "Introduction to Information Security, May 2026" },
      role: { es: "Planeación y reconocimiento (Zenmap y Greenbone).", en: "Planning and reconnaissance (Zenmap and Greenbone)." },
      points: {
        es: [
          "Todo ocurrió en un entorno de laboratorio, con autorización y con máquinas intencionalmente vulnerables: Windows XP (\"Equipo Tesorería\") y Metasploitable2, atacadas desde Kali Linux.",
          "Reconocimiento con Nmap y Zenmap.",
          "Análisis de vulnerabilidades con Greenbone/OpenVAS, incluida su instalación y configuración.",
          "Explotación controlada con Metasploit (MS08-067 y el backdoor de vsftpd 2.3.4) y auditoría de contraseñas con John the Ripper.",
          "Informe de 25 páginas con matriz consolidada de hallazgos, recomendaciones de hardening y una limitación técnica documentada (Cain & Abel)."
        ],
        en: [
          "Everything happened in an authorized lab environment with intentionally vulnerable machines: Windows XP (\"Treasury workstation\") and Metasploitable2, attacked from Kali Linux.",
          "Reconnaissance with Nmap and Zenmap.",
          "Vulnerability analysis with Greenbone/OpenVAS, including installation and configuration.",
          "Controlled exploitation with Metasploit (MS08-067 and the vsftpd 2.3.4 backdoor) and password auditing with John the Ripper.",
          "25-page report with a consolidated findings matrix, hardening recommendations and one documented technical limitation (Cain & Abel)."
        ]
      },
      tech: ["Kali Linux", "Nmap", "Zenmap", "Greenbone/OpenVAS", "Metasploit", "John the Ripper", "VMware"],
      links: [] // TODO: enlace al informe, si decides publicarlo (sin hashes ni credenciales)
    },
    {
      id: "snapbuy",
      featured: false,
      team: false,
      title: { es: "SnapBuy: aplicación web con JDBC", en: "SnapBuy: web application with JDBC" },
      summary: {
        es: "Tienda sencilla en Java 23 con un servidor HTTP escrito a mano, sin frameworks.",
        en: "A simple store in Java 23 with a hand-written HTTP server and no frameworks."
      },
      course: { es: "Bases de Datos", en: "Databases" },
      points: {
        es: [
          "Servidor HTTP propio con ServerSocket, JDBC con el driver de Oracle (ojdbc8) y Maven.",
          "Arquitectura en capas (conexión, repositorio, controladores) y consultas con PreparedStatement.",
          "Búsqueda de productos desde la base de datos, y métodos de inserción y de compra con control de stock."
        ],
        en: [
          "Own HTTP server built on ServerSocket, JDBC with the Oracle driver (ojdbc8) and Maven.",
          "Layered architecture (connection, repository, controllers) and queries with PreparedStatement.",
          "Product search from the database, plus insert and purchase methods with stock control."
        ]
      },
      tech: ["Java", "JDBC", "Oracle", "Maven", "HTML/CSS"],
      links: [] // TODO: repositorio (sin Conexion.java)
    },
    {
      id: "lealtad",
      featured: false,
      team: true,
      title: { es: "Diseño de base de datos: puntos de lealtad en cafeterías", en: "Database design: café loyalty points" },
      summary: {
        es: "Modelo relacional de 11 tablas para un programa de puntos de lealtad en cafeterías.",
        en: "An 11-table relational model for a café loyalty points program."
      },
      course: { es: "Bases de Datos, 2024", en: "Databases, 2024" },
      role: { es: "xxxxxxx", en: "xxxxxxx" }, // TODO: describe tu parte
      points: {
        es: [
          "Tablas de estudiantes, productos, compras, canjes, impuestos y más, con datos de prueba.",
          "8 vistas SQL con joins, agregaciones y una CTE.",
          "Diagrama entidad-relación y documentación de cada vista."
        ],
        en: [
          "Tables for students, products, purchases, redemptions, taxes and more, with test data.",
          "8 SQL views using joins, aggregations and a CTE.",
          "Entity-relationship diagram and documentation for each view."
        ]
      },
      tech: ["Oracle SQL"],
      links: [] // TODO: repositorio
    },
    {
      id: "powerbi",
      featured: false,
      team: false,
      title: { es: "Dashboard de Power BI: Aprendizaje-Servicio", en: "Power BI dashboard: Service-Learning" },
      summary: {
        es: "Reporte de una página sobre 20 programas de Aprendizaje-Servicio.",
        en: "A one-page report on 20 Service-Learning programs."
      },
      course: null,
      points: {
        es: [
          "Criterios de impacto y apropiación social por categoría y por departamento o ciudad.",
          "Modelo de dos tablas y medidas DAX propias (DISTINCTCOUNT, COUNTROWS, DIVIDE).",
          "KPIs, gráficos de barras, matriz, segmentadores e interacciones configuradas."
        ],
        en: [
          "Impact and social appropriation criteria by category and by department or city.",
          "Two-table model and custom DAX measures (DISTINCTCOUNT, COUNTROWS, DIVIDE).",
          "KPIs, bar charts, a matrix, slicers and configured interactions."
        ]
      },
      tech: ["Power BI", "DAX"],
      links: [] // TODO: enlace o captura, si existe
    }
  ],

  // Más reciente primero. Fechas "AAAA-MM"; end: null = presente.
  experience: [
    {
      start: "2026-08", end: null,
      role: { es: "Practicante", en: "Intern" },
      org: { es: "Oficina de Responsabilidad Social Universitaria, Pontificia Universidad Javeriana", en: "University Social Responsibility Office, Pontificia Universidad Javeriana" }
    },
    {
      start: "2026-08", end: null,
      role: { es: "Monitora administrativa", en: "Administrative assistant" },
      org: { es: "Maestría de Economía, Pontificia Universidad Javeriana", en: "Master's in Economics, Pontificia Universidad Javeriana" }
    },
    {
      start: "2026-06", end: "2026-06",
      role: { es: "Desarrolladora web", en: "Web developer" },
      org: { es: "Piedrahita S.A.S. (proyecto familiar)", en: "Piedrahita S.A.S. (family project)" }
    },
    {
      start: "2025-10", end: "2026-08",
      role: { es: "Líder del grupo estudiantil", en: "Student group leader" },
      org: { es: "Protección Animal Javeriana", en: "Protección Animal Javeriana" }
    },
    {
      start: "2024-02", end: "2025-06",
      role: { es: "Monitora de Introducción a la Programación (C++)", en: "Teaching assistant, Introduction to Programming (C++)" },
      org: { es: "Pontificia Universidad Javeriana", en: "Pontificia Universidad Javeriana" }
    }
  ],

  education: [
    {
      ongoing: true,
      title: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
      org: { es: "Pontificia Universidad Javeriana, Bogotá", en: "Pontificia Universidad Javeriana, Bogotá" }
    }
  ],

  certifications: [
    { name: { es: "Introduction to Cybersecurity", en: "Introduction to Cybersecurity" }, date: "2026-08" },
    { name: { es: "Databricks Fundamentals Accreditation", en: "Databricks Fundamentals Accreditation" }, date: "2026-06" },
    { name: { es: "Ethical Hacker, Cisco Networking Academy", en: "Ethical Hacker, Cisco Networking Academy" }, ongoing: true }
  ]
};
