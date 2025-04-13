import { CardData } from '@/components/Card';

// Helper function to determine an appropriate image based on the server name/description
const getImageForServer = (name: string, description: string): string => {
  // Map specific server names to appropriate images
  const imageMap: Record<string, string> = {
    'aws-kb-retrieval-server': '/images/aws.jpg',
    'AWS KB Retrieval': '/images/aws.jpg',
    'Brave Search': '/images/search.jpg',
    'EverArt': '/images/ai-art.jpg',
    'Everything': '/images/everything.jpg',
    'Fetch': '/images/web-fetch.jpg',
    'Filesystem': '/images/filesystem.jpg',
    'Google Drive': '/images/gdrive.jpg',
    'Git': '/images/git.jpg',
    'GitHub': '/images/github.jpg',
    'GitLab': '/images/gitlab.jpg',
    'Google Maps': '/images/maps.jpg',
    'Memory': '/images/memory.jpg',
    'PostgreSQL': '/images/database.jpg',
    'Puppeteer': '/images/browser.jpg',
    'Redis': '/images/redis.jpg',
    'Sentry': '/images/monitoring.jpg',
    'Sequential Thinking': '/images/thinking.jpg',
    'Slack': '/images/slack.jpg',
    'Sqlite': '/images/database.jpg',
    'Time': '/images/time.jpg',
  };

  return imageMap[name] || '/images/default.jpg';
};

// New server data from the provided list
const serverData = [
  {
    "name": "AWS KB Retrieval",
    "description": "Retrieval from AWS Knowledge Base using Bedrock Agent Runtime ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server"
  },
  {
    "name": "Brave Search",
    "description": "Web and local search using Brave's Search API ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search"
  },
  {
    "name": "EverArt",
    "description": "AI image generation using various models ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/everart"
  },
  {
    "name": "Everything",
    "description": "Reference / test server with prompts, resources, and tools ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/everything"
  },
  {
    "name": "Fetch",
    "description": "Web content fetching and conversion for efficient LLM usage ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch"
  },
  {
    "name": "Filesystem",
    "description": "Secure file operations with configurable access controls ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem"
  },
  {
    "name": "Git",
    "description": "Tools to read, search, and manipulate Git repositories ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/git"
  },
  {
    "name": "GitHub",
    "description": "Repository management, file operations, and GitHub API integration ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/github"
  },
  {
    "name": "GitLab",
    "description": "GitLab API, enabling project management ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab"
  },
  {
    "name": "Google Drive",
    "description": "File access and search capabilities for Google Drive ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive"
  },
  {
    "name": "Google Maps",
    "description": "Location services, directions, and place details ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps"
  },
  {
    "name": "Memory",
    "description": "Knowledge graph-based persistent memory system ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/memory"
  },
  {
    "name": "PostgreSQL",
    "description": "Read-only database access with schema inspection ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres"
  },
  {
    "name": "Puppeteer",
    "description": "Browser automation and web scraping ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer"
  },
  {
    "name": "Redis",
    "description": "Interact with Redis key-value stores ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/redis"
  },
  {
    "name": "Sentry",
    "description": "Retrieving and analyzing issues from Sentry.io ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/sentry"
  },
  {
    "name": "Sequential Thinking",
    "description": "Dynamic and reflective problem-solving through thought sequences ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking"
  },
  {
    "name": "Slack",
    "description": "Channel management and messaging capabilities ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/slack"
  },
  {
    "name": "Sqlite",
    "description": "Database interaction and business intelligence capabilities ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite"
  },
  {
    "name": "Time",
    "description": "Time and timezone conversion capabilities ",
    "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/time"
  },
  {
    "name": "21st.dev Magic",
    "description": "Create crafted UI components inspired by the best 21st.dev design engineers. ",
    "url": "https://github.com/21st-dev/magic-mcp"
  },
  {
    "name": "Adfin",
    "description": "The only platform you need to get paid - all payments in one place, invoicing and accounting reconciliations with Adfin. ",
    "url": "https://github.com/Adfin-Engineering/mcp-server-adfin"
  },
  {
    "name": "AgentQL",
    "description": "Enable AI agents to get structured data from unstructured web with AgentQL. ",
    "url": "https://github.com/tinyfish-io/agentql-mcp"
  },
  {
    "name": "AgentRPC",
    "description": "Connect to any function, any language, across network boundaries using AgentRPC. ",
    "url": "https://github.com/agentrpc/agentrpc"
  },
  {
    "name": "Aiven",
    "description": "Navigate your Aiven projects and interact with the PostgreSQL®, Apache Kafka®, ClickHouse® and OpenSearch® services ",
    "url": "https://github.com/Aiven-Open/mcp-aiven"
  },
  {
    "name": "Apache IoTDB",
    "description": "MCP Server for Apache IoTDB database and its tools ",
    "url": "https://github.com/apache/iotdb-mcp-server"
  },
  {
    "name": "Apify",
    "description": "Actors MCP Server: Use 3,000+ pre-built cloud tools to extract data from websites, e-commerce, social media, search engines, maps, and more ",
    "url": "https://github.com/apify/actors-mcp-server"
  },
  {
    "name": "APIMatic MCP",
    "description": "APIMatic MCP Server is used to validate OpenAPI specifications using APIMatic. The server processes OpenAPI files and returns validation summaries by leveraging APIMatic’s API. ",
    "url": "https://github.com/apimatic/apimatic-validator-mcp"
  },
  {
    "name": "Audiense Insights",
    "description": "Marketing insights and audience analysis from Audiense reports, covering demographic, cultural, influencer, and content engagement analysis. ",
    "url": "https://github.com/AudienseCo/mcp-audiense-insights"
  },
  {
    "name": "Axiom",
    "description": "Query and analyze your Axiom logs, traces, and all other event data in natural language ",
    "url": "https://github.com/axiomhq/mcp-server-axiom"
  },
  {
    "name": "Bankless Onchain",
    "description": "Query Onchain data, like ERC20 tokens, transaction history, smart contract state. ",
    "url": "https://github.com/bankless/onchain-mcp"
  },
  {
    "name": "BICScan",
    "description": "Risk score / asset holdings of EVM blockchain address (EOA, CA, ENS) and even domain names. ",
    "url": "https://github.com/ahnlabio/bicscan-mcp"
  },
  {
    "name": "Box",
    "description": "Interact with the Intelligent Content Management platform through Box AI. ",
    "url": "https://github.com/box-community/mcp-server-box"
  },
  {
    "name": "Browserbase",
    "description": "Automate browser interactions in the cloud (e.g. web navigation, data extraction, form filling, and more) ",
    "url": "https://github.com/browserbase/mcp-server-browserbase"
  },
  {
    "name": "Chargebee",
    "description": "MCP Server that connects AI agents to Chargebee platform. ",
    "url": "https://github.com/chargebee/agentkit/tree/main/modelcontextprotocol"
  },
  {
    "name": "Chroma",
    "description": "Embeddings, vector search, document storage, and full-text search with the open-source AI application database ",
    "url": "https://github.com/chroma-core/chroma-mcp"
  },
  {
    "name": "Chronulus AI",
    "description": "Predict anything with Chronulus AI forecasting and prediction agents. ",
    "url": "https://github.com/ChronulusAI/chronulus-mcp"
  },
  {
    "name": "CircleCI",
    "description": "Enable AI Agents to fix build failures from CircleCI. ",
    "url": "https://github.com/CircleCI-Public/mcp-server-circleci"
  },
  {
    "name": "ClickHouse",
    "description": "Query your ClickHouse database server. ",
    "url": "https://github.com/ClickHouse/mcp-clickhouse"
  },
  {
    "name": "Cloudflare",
    "description": "Deploy, configure & interrogate your resources on the Cloudflare developer platform (e.g. Workers/KV/R2/D1) ",
    "url": "https://github.com/cloudflare/mcp-server-cloudflare"
  },
  {
    "name": "Codacy",
    "description": "Interact with Codacy API to query code quality issues, vulnerabilities, and coverage insights about your code. ",
    "url": "https://github.com/codacy/codacy-mcp-server/"
  },
  {
    "name": "CodeLogic",
    "description": "Interact with CodeLogic, a Software Intelligence platform that graphs complex code and data architecture dependencies, to boost AI accuracy and insight. ",
    "url": "https://github.com/CodeLogicIncEngineering/codelogic-mcp-server"
  },
  {
    "name": "Comet Opik",
    "description": "Query and analyze your Opik logs, traces, prompts and all other telemtry data from your LLMs in natural language. ",
    "url": "https://github.com/comet-ml/opik-mcp"
  },
  {
    "name": "Convex",
    "description": "Introspect and query your apps deployed to Convex. ",
    "url": "https://stack.convex.dev/convex-mcp-server"
  },
  {
    "name": "Dart",
    "description": "Interact with task, doc, and project data in Dart, an AI-native project management tool ",
    "url": "https://github.com/its-dart/dart-mcp-server"
  },
  {
    "name": "DevHub",
    "description": "Manage and utilize website content within the DevHub CMS platform ",
    "url": "https://github.com/devhub/devhub-cms-mcp"
  },
  {
    "name": "E2B",
    "description": "Run code in secure sandboxes hosted by E2B ",
    "url": "https://github.com/e2b-dev/mcp-server"
  },
  {
    "name": "EduBase",
    "description": "Interact with EduBase, a comprehensive e-learning platform with advanced quizzing, exam management, and content organization capabilities ",
    "url": "https://github.com/EduBase/MCP"
  },
  {
    "name": "Elasticsearch",
    "description": "Query your data in Elasticsearch ",
    "url": "https://github.com/elastic/mcp-server-elasticsearch"
  },
  {
    "name": "eSignatures",
    "description": "Contract and template management for drafting, reviewing, and sending binding contracts. ",
    "url": "https://github.com/esignaturescom/mcp-server-esignatures"
  },
  {
    "name": "Exa",
    "description": "Search Engine made for AIs by Exa ",
    "url": "https://github.com/exa-labs/exa-mcp-server"
  },
  {
    "name": "Fewsats",
    "description": "Enable AI Agents to purchase anything in a secure way using Fewsats ",
    "url": "https://github.com/Fewsats/fewsats-mcp"
  },
  {
    "name": "Fibery",
    "description": "Perform queries and entity operations in your Fibery workspace. ",
    "url": "https://github.com/Fibery-inc/fibery-mcp-server"
  },
  {
    "name": "Financial Datasets",
    "description": "Stock market API made for AI agents ",
    "url": "https://github.com/financial-datasets/mcp-server"
  },
  {
    "name": "Firecrawl",
    "description": "Extract web data with Firecrawl ",
    "url": "https://github.com/mendableai/firecrawl-mcp-server"
  },
  {
    "name": "Fireproof",
    "description": "Immutable ledger database with live synchronization ",
    "url": "https://github.com/fireproof-storage/mcp-database-server"
  },
  {
    "name": "Gitee",
    "description": "Gitee API integration, repository, issue, and pull request management, and more. ",
    "url": "https://github.com/oschina/mcp-gitee"
  },
  {
    "name": "gotoHuman",
    "description": "Human-in-the-loop platform - Allow AI agents and automations to send requests for approval to your gotoHuman inbox. ",
    "url": "https://github.com/gotohuman/gotohuman-mcp-server"
  },
  {
    "name": "Grafana",
    "description": "Search dashboards, investigate incidents and query datasources in your Grafana instance ",
    "url": "https://github.com/grafana/mcp-grafana"
  },
  {
    "name": "Graphlit",
    "description": "Ingest anything from Slack to Gmail to podcast feeds, in addition to web crawling, into a searchable Graphlit project. ",
    "url": "https://github.com/graphlit/graphlit-mcp-server"
  },
  {
    "name": "GreptimeDB",
    "description": "Provides AI assistants with a secure and structured way to explore and analyze data in GreptimeDB. ",
    "url": "https://github.com/GreptimeTeam/greptimedb-mcp-server"
  },
  {
    "name": "Heroku",
    "description": "Interact with the Heroku Platform through LLM-driven tools for managing apps, add-ons, dynos, databases, and more. ",
    "url": "https://github.com/heroku/heroku-mcp-server"
  },
  {
    "name": "Hologres",
    "description": "Connect to a Hologres instance, get table metadata, query and analyze data. ",
    "url": "https://github.com/aliyun/alibabacloud-hologres-mcp-server"
  },
  {
    "name": "Hyperbrowser",
    "description": "Hyperbrowser is the next-generation platform empowering AI agents and enabling effortless, scalable browser automation. ",
    "url": "https://github.com/hyperbrowserai/mcp"
  },
  {
    "name": "IBM wxflows",
    "description": "Tool platform by IBM to build, test and deploy tools for any data source ",
    "url": "https://github.com/IBM/wxflows/tree/main/examples/mcp/javascript"
  },
  {
    "name": "ForeverVM",
    "description": "Run Python in a code sandbox. ",
    "url": "https://github.com/jamsocket/forevervm/tree/main/javascript/mcp-server"
  },
  {
    "name": "Inbox Zero",
    "description": "AI personal assistant for email Inbox Zero ",
    "url": "https://github.com/elie222/inbox-zero/tree/main/apps/mcp-server"
  },
  {
    "name": "Inkeep",
    "description": "RAG Search over your content powered by Inkeep ",
    "url": "https://github.com/inkeep/mcp-server-python"
  },
  {
    "name": "Integration App",
    "description": "Interact with any other SaaS applications on behalf of your customers. ",
    "url": "https://github.com/integration-app/mcp-server"
  },
  {
    "name": "JetBrains",
    "description": "Work on your code with JetBrains IDEs ",
    "url": "https://github.com/JetBrains/mcp-jetbrains"
  },
  {
    "name": "Kagi Search",
    "description": "Search the web using Kagi's search API ",
    "url": "https://github.com/kagisearch/kagimcp"
  },
  {
    "name": "Keboola",
    "description": "Build robust data workflows, integrations, and analytics on a single intuitive platform. ",
    "url": "https://github.com/keboola/keboola-mcp-server"
  },
  {
    "name": "Lara Translate",
    "description": "MCP Server for Lara Translate API, enabling powerful translation capabilities with support for language detection and context-aware translations. ",
    "url": "https://github.com/translated/lara-mcp"
  },
  {
    "name": "Logfire",
    "description": "Provides access to OpenTelemetry traces and metrics through Logfire. ",
    "url": "https://github.com/pydantic/logfire-mcp"
  },
  {
    "name": "Langfuse Prompt Management",
    "description": "Open-source tool for collaborative editing, versioning, evaluating, and releasing prompts. ",
    "url": "https://github.com/langfuse/mcp-server-langfuse"
  },
  {
    "name": "Lingo.dev",
    "description": "Make your AI agent speak every language on the planet, using Lingo.dev Localization Engine. ",
    "url": "https://github.com/lingodotdev/lingo.dev/blob/main/mcp.md"
  },
  {
    "name": "Mailgun",
    "description": "Interact with Mailgun API. ",
    "url": "https://github.com/mailgun/mailgun-mcp-server"
  },
  {
    "name": "Make",
    "description": "Turn your Make scenarios into callable tools for AI assistants. ",
    "url": "https://github.com/integromat/make-mcp-server"
  },
  {
    "name": "Meilisearch",
    "description": "Interact & query with Meilisearch (Full-text & semantic search API) ",
    "url": "https://github.com/meilisearch/meilisearch-mcp"
  },
  {
    "name": "Metoro",
    "description": "Query and interact with kubernetes environments monitored by Metoro ",
    "url": "https://github.com/metoro-io/metoro-mcp-server"
  },
  {
    "name": "Milvus",
    "description": "Search, Query and interact with data in your Milvus Vector Database. ",
    "url": "https://github.com/zilliztech/mcp-server-milvus"
  },
  {
    "name": "MotherDuck",
    "description": "Query and analyze data with MotherDuck and local DuckDB ",
    "url": "https://github.com/motherduckdb/mcp-server-motherduck"
  },
  {
    "name": "Needle",
    "description": "Production-ready RAG out of the box to search and retrieve data from your own documents. ",
    "url": "https://github.com/needle-ai/needle-mcp"
  },
  {
    "name": "Neo4j",
    "description": "Neo4j graph database server (schema + read/write-cypher) and separate graph database backed memory ",
    "url": "https://github.com/neo4j-contrib/mcp-neo4j/"
  },
  {
    "name": "Neon",
    "description": "Interact with the Neon serverless Postgres platform ",
    "url": "https://github.com/neondatabase/mcp-server-neon"
  },
  {
    "name": "Notion",
    "description": "This project implements an MCP server for the Notion API. ",
    "url": "https://github.com/makenotion/notion-mcp-server#readme"
  },
  {
    "name": "OceanBase",
    "description": "MCP Server for OceanBase database and its tools ",
    "url": "https://github.com/oceanbase/mcp-oceanbase"
  },
  {
    "name": "Octagon",
    "description": "Deliver real-time investment research with extensive private and public market data. ",
    "url": "https://github.com/OctagonAI/octagon-mcp-server"
  },
  {
    "name": "Oxylabs",
    "description": "Scrape websites with Oxylabs Web API, supporting dynamic rendering and parsing for structured data extraction. ",
    "url": "https://github.com/oxylabs/oxylabs-mcp"
  },
  {
    "name": "Paddle",
    "description": "Interact with the Paddle API. Manage product catalog, billing and subscriptions, and reports. ",
    "url": "https://github.com/PaddleHQ/paddle-mcp-server"
  },
  {
    "name": "PayPal",
    "description": "PayPal's official MCP server. ",
    "url": "https://mcp.paypal.com"
  },
  {
    "name": "Perplexity",
    "description": "An MCP server that connects to Perplexity's Sonar API, enabling real-time web-wide research in conversational AI. ",
    "url": "https://github.com/ppl-ai/modelcontextprotocol"
  },
  {
    "name": "Qdrant",
    "description": "Implement semantic memory layer on top of the Qdrant vector search engine ",
    "url": "https://github.com/qdrant/mcp-server-qdrant/"
  },
  {
    "name": "Ramp",
    "description": "Interact with Ramp's Developer API to run analysis on your spend and gain insights leveraging LLMs ",
    "url": "https://github.com/ramp-public/ramp-mcp"
  },
  {
    "name": "Raygun",
    "description": "Interact with your crash reporting and real using monitoring data on your Raygun account ",
    "url": "https://github.com/MindscapeHQ/mcp-server-raygun"
  },
  {
    "name": "Rember",
    "description": "Create spaced repetition flashcards in Rember to remember anything you learn in your chats ",
    "url": "https://github.com/rember/rember-mcp"
  },
  {
    "name": "Riza",
    "description": "Arbitrary code execution and tool-use platform for LLMs by Riza ",
    "url": "https://github.com/riza-io/riza-mcp"
  },
  {
    "name": "Search1API",
    "description": "One API for Search, Crawling, and Sitemaps ",
    "url": "https://github.com/fatwang2/search1api-mcp"
  },
  {
    "name": "ScreenshotOne",
    "description": "Render website screenshots with ScreenshotOne ",
    "url": "https://github.com/screenshotone/mcp/"
  },
  {
    "name": "Semgrep",
    "description": "Enable AI agents to secure code with Semgrep. ",
    "url": "https://github.com/semgrep/mcp"
  },
  {
    "name": "SingleStore",
    "description": "Interact with the SingleStore database platform ",
    "url": "https://github.com/singlestore-labs/mcp-server-singlestore"
  },
  {
    "name": "StarRocks",
    "description": "Interact with StarRocks ",
    "url": "https://github.com/StarRocks/mcp-server-starrocks"
  },
  {
    "name": "Stripe",
    "description": "Interact with Stripe API ",
    "url": "https://github.com/stripe/agent-toolkit"
  },
  {
    "name": "Tavily",
    "description": "Search engine for AI agents (search + extract) powered by Tavily ",
    "url": "https://github.com/tavily-ai/tavily-mcp"
  },
  {
    "name": "Thirdweb",
    "description": "Read/write to over 2k blockchains, enabling data querying, contract analysis/deployment, and transaction execution, powered by Thirdweb ",
    "url": "https://github.com/thirdweb-dev/ai/tree/main/python/thirdweb-mcp"
  },
  {
    "name": "Tinybird",
    "description": "Interact with Tinybird serverless ClickHouse platform ",
    "url": "https://github.com/tinybirdco/mcp-tinybird"
  },
  {
    "name": "UnifAI",
    "description": "Dynamically search and call tools using UnifAI Network ",
    "url": "https://github.com/unifai-network/unifai-mcp-server"
  },
  {
    "name": "Unstructured",
    "description": "Set up and interact with your unstructured data processing workflows in Unstructured Platform ",
    "url": "https://github.com/Unstructured-IO/UNS-MCP"
  },
  {
    "name": "Vectorize",
    "description": "Vectorize MCP server for advanced retrieval, Private Deep Research, Anything-to-Markdown file extraction and text chunking. ",
    "url": "https://github.com/vectorize-io/vectorize-mcp-server/"
  },
  {
    "name": "Verodat",
    "description": "Interact with Verodat AI Ready Data platform ",
    "url": "https://github.com/Verodat/verodat-mcp-server"
  },
  {
    "name": "VeyraX",
    "description": "Single tool to control all 100+ API integrations, and UI components ",
    "url": "https://github.com/VeyraX/veyrax-mcp"
  },
  {
    "name": "Xero",
    "description": "Interact with the accounting data in your business using our official MCP server ",
    "url": "https://github.com/XeroAPI/xero-mcp-server"
  },
  {
    "name": "Zapier",
    "description": "Connect your AI Agents to 8,000 apps instantly. ",
    "url": "https://zapier.com/mcp"
  },
  {
    "name": "ZenML",
    "description": "Interact with your MLOps and LLMOps pipelines through your ZenML MCP server ",
    "url": "https://github.com/zenml-io/mcp-zenml"
  },
  {
    "name": "Ableton Live",
    "description": "an MCP server to control Ableton Live. ",
    "url": "https://github.com/Simon-Kansara/ableton-live-mcp-server"
  },
  {
    "name": "Airbnb",
    "description": "Provides tools to search Airbnb and get listing details. ",
    "url": "https://github.com/openbnb-org/mcp-server-airbnb"
  },
  {
    "name": "AI Agent Marketplace Index",
    "description": "MCP server to search more than 5000+ AI agents and tools of various categories from AI Agent Marketplace Index and monitor traffic of AI Agents. ",
    "url": "https://github.com/AI-Agent-Hub/ai-agent-marketplace-index-mcp"
  },
  {
    "name": "Algorand",
    "description": "A comprehensive MCP server for tooling interactions (40+) and resource accessibility (60+) plus many useful prompts for interacting with the Algorand blockchain. ",
    "url": "https://github.com/GoPlausible/algorand-mcp"
  },
  {
    "name": "Airflow",
    "description": "A MCP Server that connects to Apache Airflow using official python client. ",
    "url": "https://github.com/yangkyeongmo/mcp-server-apache-airflow"
  },
  {
    "name": "Airtable",
    "description": "Read and write access to Airtable databases, with schema inspection. ",
    "url": "https://github.com/domdomegg/airtable-mcp-server"
  },
  {
    "name": "Airtable",
    "description": "Airtable Model Context Protocol Server. ",
    "url": "https://github.com/felores/airtable-mcp"
  },
  {
    "name": "AlphaVantage",
    "description": "MCP server for stock market data API AlphaVantage ",
    "url": "https://github.com/calvernaz/alphavantage"
  },
  {
    "name": "Amadeus",
    "description": "(by donghyun-chae) - An MCP server to access, explore, and interact with Amadeus Flight Offers Search API for retrieving detailed flight options, including airline, times, duration, and pricing data. ",
    "url": "https://github.com/donghyun-chae/mcp-amadeus"
  },
  {
    "name": "Anki",
    "description": "An MCP server for interacting with your Anki decks and cards. ",
    "url": "https://github.com/scorzeth/anki-mcp-server"
  },
  {
    "name": "Any Chat Completions",
    "description": "Interact with any OpenAI SDK Compatible Chat Completions API like OpenAI, Perplexity, Groq, xAI and many more. ",
    "url": "https://github.com/pyroprompts/any-chat-completions-mcp"
  },
  {
    "name": "Apple Calendar",
    "description": "An MCP server that allows you to interact with your MacOS Calendar through natural language, including features such as event creation, modification, schedule listing, finding free time slots etc. ",
    "url": "https://github.com/Omar-v2/mcp-ical"
  },
  {
    "name": "ArangoDB",
    "description": "MCP Server that provides database interaction capabilities through ArangoDB. ",
    "url": "https://github.com/ravenwits/mcp-server-arangodb"
  },
  {
    "name": "Arduino",
    "description": "MCP Server that enables AI-powered robotics using Claude AI and Arduino (ESP32) for real-world automation and interaction with robots. ",
    "url": "https://github.com/vishalmysore/choturobo"
  },
  {
    "name": "Atlassian",
    "description": "Interact with Atlassian Cloud products (Confluence and Jira) including searching/reading Confluence spaces/pages, accessing Jira issues, and project metadata. ",
    "url": "https://github.com/sooperset/mcp-atlassian"
  },
  {
    "name": "Attestable MCP",
    "description": "An MCP server running inside a trusted execution environment (TEE) via Gramine, showcasing remote attestation using RA-TLS. This allows an MCP client to verify the server before conencting. ",
    "url": "https://github.com/co-browser/attestable-mcp-server"
  },
  {
    "name": "AWS",
    "description": "Perform operations on your AWS resources using an LLM. ",
    "url": "https://github.com/rishikavikondala/mcp-server-aws"
  },
  {
    "name": "AWS Athena",
    "description": "A MCP server for AWS Athena to run SQL queries on Glue Catalog. ",
    "url": "https://github.com/lishenxydlgzs/aws-athena-mcp"
  },
  {
    "name": "AWS Cost Explorer",
    "description": "Optimize your AWS spend (including Amazon Bedrock spend) with this MCP server by examining spend across regions, services, instance types and foundation models. ",
    "url": "https://github.com/aarora79/aws-cost-explorer-mcp-server"
  },
  {
    "name": "AWS Resources Operations",
    "description": "Run generated python code to securely query or modify any AWS resources supported by boto3. ",
    "url": "https://github.com/baryhuang/mcp-server-aws-resources-python"
  },
  {
    "name": "AWS S3",
    "description": "A sample MCP server for AWS S3 that flexibly fetches objects from S3 such as PDF documents. ",
    "url": "https://github.com/aws-samples/sample-mcp-server-s3"
  },
  {
    "name": "Azure ADX",
    "description": "Query and analyze Azure Data Explorer databases. ",
    "url": "https://github.com/pab1it0/adx-mcp-server"
  },
  {
    "name": "Azure DevOps",
    "description": "An MCP server that provides a bridge to Azure DevOps services, enabling AI assistants to query and manage work items. ",
    "url": "https://github.com/Vortiago/mcp-azure-devops"
  },
  {
    "name": "Baidu AI Search",
    "description": "Web search with Baidu Cloud's AI Search ",
    "url": "https://github.com/baidubce/app-builder/tree/master/python/mcp_server/ai_search"
  },
  {
    "name": "Base Free USDC Transfer",
    "description": "Send USDC on Base for free using Claude AI! Built with Coinbase CDP. ",
    "url": "https://github.com/magnetai/mcp-free-usdc-transfer"
  },
  {
    "name": "Basic Memory",
    "description": "Local-first knowledge management system that builds a semantic graph from Markdown files, enabling persistent memory across conversations with LLMs. ",
    "url": "https://github.com/basicmachines-co/basic-memory"
  },
  {
    "name": "BigQuery",
    "description": "(by LucasHild) - This server enables LLMs to inspect database schemas and execute queries on BigQuery. ",
    "url": "https://github.com/LucasHild/mcp-server-bigquery"
  },
  {
    "name": "BigQuery",
    "description": "(by ergut) - Server implementation for Google BigQuery integration that enables direct BigQuery database access and querying capabilities ",
    "url": "https://github.com/ergut/mcp-bigquery-server"
  },
  {
    "name": "Bing Web Search API",
    "description": "(by hanchunglee) - Server implementation for Microsoft Bing Web Search API. ",
    "url": "https://github.com/leehanchung/bing-search-mcp"
  },
  {
    "name": "Bitable MCP",
    "description": "(by lloydzhou) - MCP server provides access to Lark Bitable through the Model Context Protocol. It allows users to interact with Bitable tables using predefined tools. ",
    "url": "https://github.com/lloydzhou/bitable-mcp"
  },
  {
    "name": "Blender",
    "description": "(by ahujasid) - Blender integration allowing prompt enabled 3D scene creation, modeling and manipulation. ",
    "url": "https://github.com/ahujasid/blender-mcp"
  },
  {
    "name": "browser-use",
    "description": "(by co-browser) - browser-use MCP server with dockerized playwright + chromium + vnc. supports stdio & resumable http. ",
    "url": "https://github.com/co-browser/browser-use-mcp-server"
  },
  {
    "name": "Bsc-mcp",
    "description": "The first MCP server that serves as the bridge between AI and BNB Chain, enabling AI agents to execute complex on-chain operations through seamless integration with the BNB Chain, including transfer, swap, launch, security check on any token and even more. ",
    "url": "https://github.com/TermiX-official/bsc-mcp"
  },
  {
    "name": "Calculator",
    "description": "This server enables LLMs to use calculator for precise numerical calculations. ",
    "url": "https://github.com/githejie/mcp-server-calculator"
  },
  {
    "name": "CFBD API",
    "description": "An MCP server for the College Football Data API. ",
    "url": "https://github.com/lenwood/cfbd-mcp-server"
  },
  {
    "name": "ChatMCP",
    "description": "An Open Source Cross-platform GUI Desktop application compatible with Linux, macOS, and Windows, enabling seamless interaction with MCP servers across dynamically selectable LLMs, by AIQL ",
    "url": "https://github.com/AI-QL/chat-mcp"
  },
  {
    "name": "ChatSum",
    "description": "Query and Summarize chat messages with LLM. by mcpso ",
    "url": "https://github.com/mcpso/mcp-server-chatsum"
  },
  {
    "name": "Chroma",
    "description": "Vector database server for semantic document search and metadata filtering, built on Chroma ",
    "url": "https://github.com/privetin/chroma"
  },
  {
    "name": "ClaudePost",
    "description": "ClaudePost enables seamless email management for Gmail, offering secure features like email search, reading, and sending. ",
    "url": "https://github.com/ZilongXue/claude-post"
  },
  {
    "name": "Cloudinary",
    "description": "Cloudinary Model Context Protocol Server to upload media to Cloudinary and get back the media link and details. ",
    "url": "https://github.com/felores/cloudinary-mcp-server"
  },
  {
    "name": "code-assistant",
    "description": "A coding assistant MCP server that allows to explore a code-base and make changes to code. Should be used with trusted repos only (insufficient protection against prompt injections). ",
    "url": "https://github.com/stippi/code-assistant"
  },
  {
    "name": "code-executor",
    "description": "An MCP server that allows LLMs to execute Python code within a specified Conda environment. ",
    "url": "https://github.com/bazinga012/mcp_code_executor"
  },
  {
    "name": "code-sandbox-mcp",
    "description": "An MCP server to create secure code sandbox environment for executing code within Docker containers. ",
    "url": "https://github.com/Automata-Labs-team/code-sandbox-mcp"
  },
  {
    "name": "cognee-mcp",
    "description": "GraphRAG memory server with customizable ingestion, data processing and search ",
    "url": "https://github.com/topoteretes/cognee/tree/main/cognee-mcp"
  },
  {
    "name": "coin_api_mcp",
    "description": "Provides access to coinmarketcap cryptocurrency data. ",
    "url": "https://github.com/longmans/coin_api_mcp"
  },
  {
    "name": "Contentful-mcp",
    "description": "Read, update, delete, publish content in your Contentful space(s) from this MCP Server. ",
    "url": "https://github.com/ivo-toby/contentful-mcp"
  },
  {
    "name": "crypto-feargreed-mcp",
    "description": "Providing real-time and historical Crypto Fear & Greed Index data. ",
    "url": "https://github.com/kukapay/crypto-feargreed-mcp"
  },
  {
    "name": "cryptopanic-mcp-server",
    "description": "Providing latest cryptocurrency news to AI agents, powered by CryptoPanic. ",
    "url": "https://github.com/kukapay/cryptopanic-mcp-server"
  },
  {
    "name": "Dappier",
    "description": "Connect LLMs to real-time, rights-cleared, proprietary data from trusted sources. Access specialized models for Real-Time Web Search, News, Sports, Financial Data, Crypto, and premium publisher content. Explore data models at marketplace.dappier.com. ",
    "url": "https://github.com/DappierAI/dappier-mcp"
  },
  {
    "name": "Databricks",
    "description": "Allows LLMs to run SQL queries, list and get details of jobs executions in a Databricks account. ",
    "url": "https://github.com/JordiNeil/mcp-databricks-server"
  },
  {
    "name": "Datadog",
    "description": "Datadog MCP Server for application tracing, monitoring, dashboard, incidents queries built on official datadog api. ",
    "url": "https://github.com/GeLi2001/datadog-mcp-server"
  },
  {
    "name": "Data Exploration",
    "description": "MCP server for autonomous data exploration on .csv-based datasets, providing intelligent insights with minimal effort. NOTE: Will execute arbitrary Python code on your machine, please use with caution! ",
    "url": "https://github.com/reading-plus-ai/mcp-server-data-exploration"
  },
  {
    "name": "Dataset Viewer",
    "description": "Browse and analyze Hugging Face datasets with features like search, filtering, statistics, and data export ",
    "url": "https://github.com/privetin/dataset-viewer"
  },
  {
    "name": "DBHub",
    "description": "Universal database MCP server connecting to MySQL, PostgreSQL, SQLite, DuckDB and etc. ",
    "url": "https://github.com/bytebase/dbhub/"
  },
  {
    "name": "DeepSeek MCP Server",
    "description": "Model Context Protocol server integrating DeepSeek's advanced language models, in addition to other useful API endpoints ",
    "url": "https://github.com/DMontgomery40/deepseek-mcp-server"
  },
  {
    "name": "Deepseek_R1",
    "description": "A Model Context Protocol (MCP) server implementation connecting Claude Desktop with DeepSeek's language models (R1/V3) ",
    "url": "https://github.com/66julienmartin/MCP-server-Deepseek_R1"
  },
  {
    "name": "deepseek-thinker-mcp",
    "description": "A MCP (Model Context Protocol) provider Deepseek reasoning content to MCP-enabled AI Clients, like Claude Desktop. Supports access to Deepseek's thought processes from the Deepseek API service or from a local Ollama server. ",
    "url": "https://github.com/ruixingshi/deepseek-thinker-mcp"
  },
  {
    "name": "Descope",
    "description": "An MCP server to integrate with Descope to search audit logs, manage users, and more. ",
    "url": "https://github.com/descope-sample-apps/descope-mcp-server"
  },
  {
    "name": "DevRev",
    "description": "An MCP server to integrate with DevRev APIs to search through your DevRev Knowledge Graph where objects can be imported from diff. sources listed here. ",
    "url": "https://github.com/kpsunil97/devrev-mcp-server"
  },
  {
    "name": "Dicom",
    "description": "An MCP server to query and retrieve medical images and for parsing and reading dicom-encapsulated documents (pdf etc.). ",
    "url": "https://github.com/ChristianHinge/dicom-mcp"
  },
  {
    "name": "Dify",
    "description": "A simple implementation of an MCP server for dify workflows. ",
    "url": "https://github.com/YanxingLiu/dify-mcp-server"
  },
  {
    "name": "Discord",
    "description": "A MCP server to connect to Discord guilds through a bot and read and write messages in channels ",
    "url": "https://github.com/v-3/discordmcp"
  },
  {
    "name": "Discord",
    "description": "A MCP server, which connects to Discord through a bot, and provides comprehensive integration with Discord. ",
    "url": "https://github.com/SaseQ/discord-mcp"
  },
  {
    "name": "Discourse",
    "description": "A MCP server to search Discourse posts on a Discourse forum. ",
    "url": "https://github.com/AshDevFr/discourse-mcp-server"
  },
  {
    "name": "Docker",
    "description": "Integrate with Docker to manage containers, images, volumes, and networks. ",
    "url": "https://github.com/ckreiling/mcp-server-docker"
  },
  {
    "name": "Drupal",
    "description": "Server for interacting with Drupal using STDIO transport layer. ",
    "url": "https://github.com/Omedia/mcp-server-drupal"
  },
  {
    "name": "dune-analytics-mcp",
    "description": "A mcp server that bridges Dune Analytics data to AI agents. ",
    "url": "https://github.com/kukapay/dune-analytics-mcp"
  },
  {
    "name": "EdgeOne Pages MCP",
    "description": "An MCP service for deploying HTML content to EdgeOne Pages and obtaining a publicly accessible URL. ",
    "url": "https://github.com/TencentEdgeOne/edgeone-pages-mcp"
  },
  {
    "name": "Elasticsearch",
    "description": "MCP server implementation that provides Elasticsearch interaction. ",
    "url": "https://github.com/cr7258/elasticsearch-mcp-server"
  },
  {
    "name": "ElevenLabs",
    "description": "A server that integrates with ElevenLabs text-to-speech API capable of generating full voiceovers with multiple voices. ",
    "url": "https://github.com/mamertofabian/elevenlabs-mcp-server"
  },
  {
    "name": "Ergo Blockchain MCP",
    "description": "An MCP server to integrate Ergo Blockchain Node and Explorer APIs for checking address balances, analyzing transactions, viewing transaction history, performing forensic analysis of addresses, searching for tokens, and monitoring network status. ",
    "url": "https://github.com/marctheshark3/ergo-mcp"
  },
  {
    "name": "Eunomia",
    "description": "Extension of the Eunomia framework that connects Eunomia instruments with MCP servers ",
    "url": "https://github.com/whataboutyou-ai/eunomia-MCP-server"
  },
  {
    "name": "EVM MCP Server",
    "description": "Comprehensive blockchain services for 30+ EVM networks, supporting native tokens, ERC20, NFTs, smart contracts, transactions, and ENS resolution. ",
    "url": "https://github.com/mcpdotdirect/evm-mcp-server"
  },
  {
    "name": "Everything Search",
    "description": "Fast file searching capabilities across Windows (using Everything SDK), macOS (using mdfind command), and Linux (using locate/plocate command). ",
    "url": "https://github.com/mamertofabian/mcp-everything-search"
  },
  {
    "name": "Excel",
    "description": "Excel manipulation including data reading/writing, worksheet management, formatting, charts, and pivot table. ",
    "url": "https://github.com/haris-musa/excel-mcp-server"
  },
  {
    "name": "Fantasy PL",
    "description": "Give your coding agent direct access to up-to date Fantasy Premier League data ",
    "url": "https://github.com/rishijatia/fantasy-pl-mcp"
  },
  {
    "name": "fastn.ai – Unified API MCP Server",
    "description": "A remote, dynamic MCP server with a unified API that connects to 1,000+ tools, actions, and workflows, featuring built-in authentication and monitoring. ",
    "url": "https://github.com/fastnai/mcp-fastn"
  },
  {
    "name": "Fetch",
    "description": "A server that flexibly fetches HTML, JSON, Markdown, or plaintext. ",
    "url": "https://github.com/zcaceres/fetch-mcp"
  },
  {
    "name": "Fingertip",
    "description": "MCP server for Fingertip.com to search and create new sites. ",
    "url": "https://github.com/fingertip-com/fingertip-mcp"
  },
  {
    "name": "Figma",
    "description": "Give your coding agent direct access to Figma file data, helping it one-shot design implementation. ",
    "url": "https://github.com/GLips/Figma-Context-MCP"
  },
  {
    "name": "Firebase",
    "description": "Server to interact with Firebase services including Firebase Authentication, Firestore, and Firebase Storage. ",
    "url": "https://github.com/gannonh/firebase-mcp"
  },
  {
    "name": "FireCrawl",
    "description": "Advanced web scraping with JavaScript rendering, PDF support, and smart rate limiting ",
    "url": "https://github.com/vrknetha/mcp-server-firecrawl"
  },
  {
    "name": "FlightRadar24",
    "description": "A Claude Desktop MCP server that helps you track flights in real-time using Flightradar24 data. ",
    "url": "https://github.com/sunsetcoder/flightradar24-mcp-server"
  },
  {
    "name": "Ghost",
    "description": "A Model Context Protocol (MCP) server for interacting with Ghost CMS through LLM interfaces like Claude. ",
    "url": "https://github.com/MFYDev/ghost-mcp"
  },
  {
    "name": "Github Actions",
    "description": "A Model Context Protocol (MCP) server for interacting with Github Actions. ",
    "url": "https://github.com/ko1ynnky/github-actions-mcp-server"
  },
  {
    "name": "Glean",
    "description": "A server that uses Glean API to search and chat. ",
    "url": "https://github.com/longyi1207/glean-mcp-server"
  },
  {
    "name": "Gmail",
    "description": "A Model Context Protocol (MCP) server for Gmail integration in Claude Desktop with auto authentication support. ",
    "url": "https://github.com/GongRzhe/Gmail-MCP-Server"
  },
  {
    "name": "Gmail Headless",
    "description": "Remote hostable MCP server that can get and send Gmail messages without local credential or file system setup. ",
    "url": "https://github.com/baryhuang/mcp-headless-gmail"
  },
  {
    "name": "Goal Story",
    "description": "a Goal Tracker and Visualization Tool for personal and professional development. ",
    "url": "https://github.com/hichana/goalstory-mcp"
  },
  {
    "name": "GOAT",
    "description": "Run more than +200 onchain actions on any blockchain including Ethereum, Solana and Base. ",
    "url": "https://github.com/goat-sdk/goat/tree/main/typescript/examples/by-framework/model-context-protocol"
  },
  {
    "name": "Godot",
    "description": "A MCP server providing comprehensive Godot engine integration for project editing, debugging, and scene management. ",
    "url": "https://github.com/Coding-Solo/godot-mcp"
  },
  {
    "name": "Golang Filesystem Server",
    "description": "Secure file operations with configurable access controls built with Go! ",
    "url": "https://github.com/mark3labs/mcp-filesystem-server"
  },
  {
    "name": "Goodnews",
    "description": "A simple MCP server that delivers curated positive and uplifting news stories. ",
    "url": "https://github.com/VectorInstitute/mcp-goodnews"
  },
  {
    "name": "Google Calendar",
    "description": "Integration with Google Calendar to check schedules, find time, and add/delete events ",
    "url": "https://github.com/v-3/google-calendar"
  },
  {
    "name": "Google Calendar",
    "description": "Google Calendar MCP Server for managing Google calendar events. Also supports searching for events by attributes like title and location. ",
    "url": "https://github.com/nspady/google-calendar-mcp"
  },
  {
    "name": "Google Custom Search",
    "description": "Provides Google Search results via the Google Custom Search API ",
    "url": "https://github.com/adenot/mcp-google-search"
  },
  {
    "name": "Google Tasks",
    "description": "Google Tasks API Model Context Protocol Server. ",
    "url": "https://github.com/zcaceres/gtasks-mcp"
  },
  {
    "name": "GraphQL Schema",
    "description": "Allow LLMs to explore large GraphQL schemas without bloating the context. ",
    "url": "https://github.com/hannesj/mcp-graphql-schema"
  },
  {
    "name": "HDW LinkedIn",
    "description": "Access to profile data and management of user account with HorizonDataWave.ai. ",
    "url": "https://github.com/horizondatawave/hdw-mcp-server"
  },
  {
    "name": "Heurist Mesh Agent",
    "description": "Access specialized web3 AI agents for blockchain analysis, smart contract security, token metrics, and blockchain interactions through the Heurist Mesh network. ",
    "url": "https://github.com/heurist-network/heurist-mesh-mcp-server"
  },
  {
    "name": "Holaspirit",
    "description": "Interact with Holaspirit. ",
    "url": "https://github.com/syucream/holaspirit-mcp-server"
  },
  {
    "name": "Home Assistant",
    "description": "Interact with Home Assistant including viewing and controlling lights, switches, sensors, and all other Home Assistant entities. ",
    "url": "https://github.com/tevonsb/homeassistant-mcp"
  },
  {
    "name": "Home Assistant",
    "description": "Docker-ready MCP server for Home Assistant with entity management, domain summaries, automation support, and guided conversations. Includes pre-built container images for easy installation. ",
    "url": "https://github.com/voska/hass-mcp"
  },
  {
    "name": "HubSpot",
    "description": "HubSpot CRM integration for managing contacts and companies. Create and retrieve CRM data directly through Claude chat. ",
    "url": "https://github.com/buryhuang/mcp-hubspot"
  },
  {
    "name": "HuggingFace Spaces",
    "description": "Server for using HuggingFace Spaces, supporting Open Source Image, Audio, Text Models and more. Claude Desktop mode for easy integration. ",
    "url": "https://github.com/evalstate/mcp-hfspace"
  },
  {
    "name": "Hyperliquid",
    "description": "An MCP server implementation that integrates the Hyperliquid SDK for exchange data. ",
    "url": "https://github.com/mektigboy/server-hyperliquid"
  },
  {
    "name": "iFlytek Workflow",
    "description": "Connect to iFlytek Workflow via the MCP server and run your own Agent. ",
    "url": "https://github.com/iflytek/ifly-workflow-mcp-server"
  },
  {
    "name": "Image Generation",
    "description": "This MCP server provides image generation capabilities using the Replicate Flux model. ",
    "url": "https://github.com/GongRzhe/Image-Generation-MCP-Server"
  },
  {
    "name": "InfluxDB",
    "description": "Run queries against InfluxDB OSS API v2. ",
    "url": "https://github.com/idoru/influxdb-mcp-server"
  },
  {
    "name": "Inoyu",
    "description": "Interact with an Apache Unomi CDP customer data platform to retrieve and update customer profiles ",
    "url": "https://github.com/sergehuber/inoyu-mcp-unomi-server"
  },
  {
    "name": "Intercom",
    "description": "An MCP-compliant server for retrieving customer support tickets from Intercom. This tool enables AI assistants like Claude Desktop and Cline to access and analyze your Intercom support tickets. ",
    "url": "https://github.com/raoulbia-ai/mcp-server-for-intercom"
  },
  {
    "name": "iOS Simulator",
    "description": "A Model Context Protocol (MCP) server that enables LLMs to interact with iOS simulators (iPhone, iPad, etc.) through natural language commands. ",
    "url": "https://github.com/InditexTech/mcp-server-simulator-ios-idb"
  },
  {
    "name": "iTerm MCP",
    "description": "Integration with iTerm2 terminal emulator for macOS, enabling LLMs to execute and monitor terminal commands. ",
    "url": "https://github.com/ferrislucas/iterm-mcp"
  },
  {
    "name": "JavaFX",
    "description": "Make drawings using a JavaFX canvas ",
    "url": "https://github.com/mcpso/mcp-server-javafx"
  },
  {
    "name": "JDBC",
    "description": "Connect to any JDBC-compatible database and query, insert, update, delete, and more. Supports MySQL, PostgreSQL, Oracle, SQL Server, sqllite and more. ",
    "url": "https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/jdbc"
  },
  {
    "name": "JSON",
    "description": "JSON handling and processing server with advanced query capabilities using JSONPath syntax and support for array, string, numeric, and date operations. ",
    "url": "https://github.com/GongRzhe/JSON-MCP-Server"
  },
  {
    "name": "KiCad MCP",
    "description": "MCP server for KiCad on Mac, Windows, and Linux. ",
    "url": "https://github.com/lamaalrajih/kicad-mcp"
  },
  {
    "name": "Keycloak MCP",
    "description": "This MCP server enables natural language interaction with Keycloak for user and realm management including creating, deleting, and listing users and realms. ",
    "url": "https://github.com/ChristophEnglisch/keycloak-model-context-protocol"
  },
  {
    "name": "Kibela",
    "description": "(by kiwamizamurai) - Interact with Kibela API. ",
    "url": "https://github.com/kiwamizamurai/mcp-kibela-server"
  },
  {
    "name": "kintone",
    "description": "Manage records and apps in kintone through LLM tools. ",
    "url": "https://github.com/macrat/mcp-server-kintone"
  },
  {
    "name": "Kong Konnect",
    "description": "A Model Context Protocol (MCP) server for interacting with Kong Konnect APIs, allowing AI assistants to query and analyze Kong Gateway configurations, traffic, and analytics. ",
    "url": "https://github.com/Kong/mcp-konnect"
  },
  {
    "name": "Kubernetes",
    "description": "Connect to Kubernetes cluster and manage pods, deployments, and services. ",
    "url": "https://github.com/Flux159/mcp-server-kubernetes"
  },
  {
    "name": "Kubernetes and OpenShift",
    "description": "A powerful Kubernetes MCP server with additional support for OpenShift. Besides providing CRUD operations for any Kubernetes resource, this server provides specialized tools to interact with your cluster. ",
    "url": "https://github.com/manusa/kubernetes-mcp-server"
  },
  {
    "name": "Langflow-DOC-QA-SERVER",
    "description": "A Model Context Protocol server for document Q&A powered by Langflow. It demonstrates core MCP concepts by providing a simple interface to query documents through a Langflow backend. ",
    "url": "https://github.com/GongRzhe/Langflow-DOC-QA-SERVER"
  },
  {
    "name": "Lightdash",
    "description": "Interact with Lightdash, a BI tool. ",
    "url": "https://github.com/syucream/lightdash-mcp-server"
  },
  {
    "name": "Linear",
    "description": "Allows LLM to interact with Linear's API for project management, including searching, creating, and updating issues. ",
    "url": "https://github.com/jerhadf/linear-mcp-server"
  },
  {
    "name": "Linear (Go)",
    "description": "Allows LLM to interact with Linear's API via a single static binary. ",
    "url": "https://github.com/geropl/linear-mcp-go"
  },
  {
    "name": "LINE",
    "description": "(by amornpan) - Implementation for LINE Bot integration that enables Language Models to read and analyze LINE conversations through a standardized interface. Features asynchronous operation, comprehensive logging, webhook event handling, and support for various message types. ",
    "url": "https://github.com/amornpan/py-mcp-line"
  },
  {
    "name": "LlamaCloud",
    "description": "(by marcusschiesser) - Integrate the data stored in a managed index on LlamaCloud ",
    "url": "https://github.com/run-llama/mcp-server-llamacloud"
  },
  {
    "name": "llm-context",
    "description": "Provides a repo-packing MCP tool with configurable profiles that specify file inclusion/exclusion patterns and optional prompts. ",
    "url": "https://github.com/cyberchitta/llm-context.py"
  },
  {
    "name": "mac-messages-mcp",
    "description": "An MCP server that securely interfaces with your iMessage database via the Model Context Protocol (MCP), allowing LLMs to query and analyze iMessage conversations. It includes robust phone number validation, attachment processing, contact management, group chat handling, and full support for sending and receiving messages. ",
    "url": "https://github.com/carterlasalle/mac_messages_mcp"
  },
  {
    "name": "MariaDB",
    "description": "MariaDB database integration with configurable access controls in Python. ",
    "url": "https://github.com/abel9851/mcp-server-mariadb"
  },
  {
    "name": "Maton",
    "description": "Connect to your SaaS tools like HubSpot, Salesforce, and more. ",
    "url": "https://github.com/maton-ai/agent-toolkit/tree/main/modelcontextprotocol"
  },
  {
    "name": "MCP Compass",
    "description": "Suggest the right MCP server for your needs ",
    "url": "https://github.com/liuyoshio/mcp-compass"
  },
  {
    "name": "MCP Create",
    "description": "A dynamic MCP server management service that creates, runs, and manages Model Context Protocol servers on-the-fly. ",
    "url": "https://github.com/tesla0225/mcp-create"
  },
  {
    "name": "MCP Installer",
    "description": "This server is a server that installs other MCP servers for you. ",
    "url": "https://github.com/anaisbetts/mcp-installer"
  },
  {
    "name": "mcp-k8s-go",
    "description": "Golang-based Kubernetes server for MCP to browse pods and their logs, events, namespaces and more. Built to be extensible. ",
    "url": "https://github.com/strowk/mcp-k8s-go"
  },
  {
    "name": "mcp-local-rag",
    "description": "\"primitive\" RAG-like web search model context protocol (MCP) server that runs locally using Google's MediaPipe Text Embedder and DuckDuckGo Search. ✨ no APIs required ✨. ",
    "url": "https://github.com/nkapila6/mcp-local-rag"
  },
  {
    "name": "mcp-proxy",
    "description": "Connect to MCP servers that run on SSE transport, or expose stdio servers as an SSE server. ",
    "url": "https://github.com/sparfenyuk/mcp-proxy"
  },
  {
    "name": "mem0-mcp",
    "description": "A Model Context Protocol server for Mem0, which helps with managing coding preferences. ",
    "url": "https://github.com/mem0ai/mem0-mcp"
  },
  {
    "name": "MSSQL",
    "description": "MSSQL database integration with configurable access controls and schema inspection ",
    "url": "https://github.com/aekanun2020/mcp-server/"
  },
  {
    "name": "MSSQL",
    "description": "(by jexin) - MCP Server for MSSQL database in Python ",
    "url": "https://github.com/JexinSam/mssql_mcp_server"
  },
  {
    "name": "MSSQL-Python",
    "description": "(by amornpan) - A read-only Python implementation for MSSQL database access with enhanced security features, configurable access controls, and schema inspection capabilities. Focuses on safe database interaction through Python ecosystem. ",
    "url": "https://github.com/amornpan/py-mcp-mssql"
  },
  {
    "name": "MSSQL-MCP",
    "description": "(by daobataotie) - MSSQL MCP that refer to the official website's SQLite MCP for modifications to adapt to MSSQL ",
    "url": "https://github.com/daobataotie/mssql-mcp"
  },
  {
    "name": "Markdownify",
    "description": "MCP to convert almost anything to Markdown (PPTX, HTML, PDF, Youtube Transcripts and more) ",
    "url": "https://github.com/zcaceres/mcp-markdownify-server"
  },
  {
    "name": "Microsoft Teams",
    "description": "MCP server that integrates Microsoft Teams messaging (read, post, mention, list members and threads) ",
    "url": "https://github.com/InditexTech/mcp-teams-server"
  },
  {
    "name": "Mindmap",
    "description": "(by YuChenSSR) - A server that generates mindmaps from input containing markdown code. ",
    "url": "https://github.com/YuChenSSR/mindmap-mcp-server"
  },
  {
    "name": "Minima",
    "description": "MCP server for RAG on local files ",
    "url": "https://github.com/dmayboroda/minima"
  },
  {
    "name": "Mobile MCP",
    "description": "(by Mobile Next) - MCP server for Mobile(iOS/Android) automation, app scraping and development using physical devices or simulators/emulators. ",
    "url": "https://github.com/mobile-next/mobile-mcp"
  },
  {
    "name": "MongoDB",
    "description": "A Model Context Protocol Server for MongoDB. ",
    "url": "https://github.com/kiliczsh/mcp-mongo-server"
  },
  {
    "name": "MongoDB Lens",
    "description": "Full Featured MCP Server for MongoDB Databases. ",
    "url": "https://github.com/furey/mongodb-lens"
  },
  {
    "name": "Monday.com",
    "description": "MCP Server to interact with Monday.com boards and items. ",
    "url": "https://github.com/sakce/mcp-server-monday"
  },
  {
    "name": "Multicluster-MCP-Sever",
    "description": "The gateway for GenAI systems to interact with multiple Kubernetes clusters. ",
    "url": "https://github.com/yanmxa/multicluster-mcp-server"
  },
  {
    "name": "MySQL",
    "description": "(by benborla) - MySQL database integration in NodeJS with configurable access controls and schema inspection ",
    "url": "https://github.com/benborla/mcp-server-mysql"
  },
  {
    "name": "MySQL",
    "description": "(by DesignComputer) - MySQL database integration in Python with configurable access controls and schema inspection ",
    "url": "https://github.com/designcomputer/mysql_mcp_server"
  },
  {
    "name": "n8n",
    "description": "This MCP server provides tools and resources for AI assistants to manage n8n workflows and executions, including listing, creating, updating, and deleting workflows, as well as monitoring their execution status. ",
    "url": "https://github.com/leonardsellem/n8n-mcp-server"
  },
  {
    "name": "NASA",
    "description": "(by ProgramComputer) - Access to a unified gateway of NASA's data sources including but not limited to APOD, NEO, EPIC, GIBS. ",
    "url": "https://github.com/ProgramComputer/NASA-MCP-server"
  },
  {
    "name": "Nasdaq Data Link",
    "description": "(by stefanoamorelli) - An MCP server to access, explore, and interact with Nasdaq Data Link’s extensive and valuable financial and economic datasets. ",
    "url": "https://github.com/stefanoamorelli/nasdaq-data-link-mcp"
  },
  {
    "name": "National Parks",
    "description": "The server provides latest information of park details, alerts, visitor centers, campgrounds, hiking trails, and events for U.S. National Parks. ",
    "url": "https://github.com/KyrieTangSheng/mcp-server-nationalparks"
  },
  {
    "name": "NAVER",
    "description": "(by pfldy2850) - This MCP server provides tools to interact with various Naver services, such as searching blogs, news, books, and more. ",
    "url": "https://github.com/pfldy2850/py-mcp-naver"
  },
  {
    "name": "NS Travel Information",
    "description": "Access Dutch Railways (NS) real-time train travel information and disruptions through the official NS API. ",
    "url": "https://github.com/r-huijts/ns-mcp-server"
  },
  {
    "name": "Neo4j",
    "description": "A community built server that interacts with Neo4j Graph Database. ",
    "url": "https://github.com/da-okazaki/mcp-neo4j-server"
  },
  {
    "name": "Neovim",
    "description": "An MCP Server for your Neovim session. ",
    "url": "https://github.com/bigcodegen/mcp-neovim-server"
  },
  {
    "name": "Notion",
    "description": "(by suekou) - Interact with Notion API. ",
    "url": "https://github.com/suekou/mcp-notion-server"
  },
  {
    "name": "Notion",
    "description": "(by v-3) - Notion MCP integration. Search, Read, Update, and Create pages through Claude chat. ",
    "url": "https://github.com/v-3/notion-server"
  },
  {
    "name": "ntfy-mcp",
    "description": "(by teddyzxcv) - The MCP server that keeps you informed by sending the notification on phone using ntfy ",
    "url": "https://github.com/teddyzxcv/ntfy-mcp"
  },
  {
    "name": "oatpp-mcp",
    "description": "C++ MCP integration for Oat++. Use Oat++ to build MCP servers. ",
    "url": "https://github.com/oatpp/oatpp-mcp"
  },
  {
    "name": "Obsidian Markdown Notes",
    "description": "Read and search through your Obsidian vault or any directory containing Markdown notes ",
    "url": "https://github.com/calclavia/mcp-obsidian"
  },
  {
    "name": "obsidian-mcp",
    "description": "(by Steven Stavrakis) An MCP server for Obsidian.md with tools for searching, reading, writing, and organizing notes. ",
    "url": "https://github.com/StevenStavrakis/obsidian-mcp"
  },
  {
    "name": "OceanBase",
    "description": "(by yuanoOo) - A Model Context Protocol (MCP) server that enables secure interaction with OceanBase databases. ",
    "url": "https://github.com/yuanoOo/oceanbase_mcp_server"
  },
  {
    "name": "Okta",
    "description": "Interact with Okta API. ",
    "url": "https://github.com/kapilduraphe/okta-mcp-server"
  },
  {
    "name": "OneNote",
    "description": "(by Rajesh Vijay) An MCP server that connects to Microsoft OneNote using the Microsoft Graph API. Reading notebooks, sections, and pages from OneNote,Creating new notebooks, sections, and pages in OneNote. ",
    "url": "https://github.com/rajvirtual/MCP-Servers/tree/master/onenote"
  },
  {
    "name": "OpenAI WebSearch MCP",
    "description": "This is a Python-based MCP server that provides OpenAI `web_search` build-in tool. ",
    "url": "https://github.com/ConechoAI/openai-websearch-mcp"
  },
  {
    "name": "OpenAPI",
    "description": "Interact with OpenAPI APIs. ",
    "url": "https://github.com/snaggle-ai/openapi-mcp-server"
  },
  {
    "name": "OpenAPI AnyApi",
    "description": "Interact with large OpenAPI docs using built-in semantic search for endpoints. Allows for customizing the MCP server prefix. ",
    "url": "https://github.com/baryhuang/mcp-server-any-openapi"
  },
  {
    "name": "OpenAPI Schema",
    "description": "Allow LLMs to explore large OpenAPI schemas without bloating the context. ",
    "url": "https://github.com/hannesj/mcp-openapi-schema"
  },
  {
    "name": "OpenCTI",
    "description": "Interact with OpenCTI platform to retrieve threat intelligence data including reports, indicators, malware and threat actors. ",
    "url": "https://github.com/Spathodea-Network/opencti-mcp"
  },
  {
    "name": "OpenDota",
    "description": "Interact with OpenDota API to retrieve Dota 2 match data, player statistics, and more. ",
    "url": "https://github.com/asusevski/opendota-mcp-server"
  },
  {
    "name": "OpenRPC",
    "description": "Interact with and discover JSON-RPC APIs via OpenRPC. ",
    "url": "https://github.com/shanejonas/openrpc-mpc-server"
  },
  {
    "name": "Open Strategy Partners Marketing Tools",
    "description": "Content editing codes, value map, and positioning tools for product marketing. ",
    "url": "https://github.com/open-strategy-partners/osp_marketing_tools"
  },
  {
    "name": "Pandoc",
    "description": "MCP server for seamless document format conversion using Pandoc, supporting Markdown, HTML, PDF, DOCX (.docx), csv and more. ",
    "url": "https://github.com/vivekVells/mcp-pandoc"
  },
  {
    "name": "PIF",
    "description": "A Personal Intelligence Framework (PIF), providing tools for file operations, structured reasoning, and journal-based documentation to support continuity and evolving human-AI collaboration across sessions. ",
    "url": "https://github.com/hungryrobot1/MCP-PIF"
  },
  {
    "name": "Pinecone",
    "description": "MCP server for searching and uploading records to Pinecone. Allows for simple RAG features, leveraging Pinecone's Inference API. ",
    "url": "https://github.com/sirmews/mcp-pinecone"
  },
  {
    "name": "Placid.app",
    "description": "Generate image and video creatives using Placid.app templates ",
    "url": "https://github.com/felores/placid-mcp-server"
  },
  {
    "name": "Playwright",
    "description": "This MCP Server will help you run browser automation and webscraping using Playwright ",
    "url": "https://github.com/executeautomation/mcp-playwright"
  },
  {
    "name": "Postman",
    "description": "MCP server for running Postman Collections locally via Newman. Allows for simple execution of Postman Server and returns the results of whether the collection passed all the tests. ",
    "url": "https://github.com/shannonlal/mcp-postman"
  },
  {
    "name": "Productboard",
    "description": "Integrate the Productboard API into agentic workflows via MCP. ",
    "url": "https://github.com/kenjihikmatullah/productboard-mcp"
  },
  {
    "name": "Prometheus",
    "description": "Query and analyze Prometheus - open-source monitoring system. ",
    "url": "https://github.com/pab1it0/prometheus-mcp-server"
  },
  {
    "name": "Pulumi",
    "description": "MCP Server to Interact with Pulumi API, creates and lists Stacks ",
    "url": "https://github.com/dogukanakkaya/pulumi-mcp-server"
  },
  {
    "name": "Pushover",
    "description": "Send instant notifications to your devices using Pushover.net ",
    "url": "https://github.com/ashiknesin/pushover-mcp"
  },
  {
    "name": "QGIS",
    "description": "connects QGIS to Claude AI through the MCP. This integration enables prompt-assisted project creation, layer loading, code execution, and more. ",
    "url": "https://github.com/jjsantos01/qgis_mcp"
  },
  {
    "name": "QuickChart",
    "description": "A Model Context Protocol server for generating charts using QuickChart.io ",
    "url": "https://github.com/GongRzhe/Quickchart-MCP-Server"
  },
  {
    "name": "Qwen_Max",
    "description": "A Model Context Protocol (MCP) server implementation for the Qwen models. ",
    "url": "https://github.com/66julienmartin/MCP-server-Qwen_Max"
  },
  {
    "name": "RabbitMQ",
    "description": "The MCP server that interacts with RabbitMQ to publish and consume messages. ",
    "url": "https://github.com/kenliao94/mcp-server-rabbitmq"
  },
  {
    "name": "RAG Web Browser",
    "description": "An MCP server for Apify's open-source RAG Web Browser Actor to perform web searches, scrape URLs, and return content in Markdown. ",
    "url": "https://github.com/apify/mcp-server-rag-web-browser"
  },
  {
    "name": "Reaper",
    "description": "Interact with your Reaper (Digital Audio Workstation) projects. ",
    "url": "https://github.com/dschuler36/reaper-mcp-server"
  },
  {
    "name": "Redis",
    "description": "Redis database operations and caching microservice server with support for key-value operations, expiration management, and pattern-based key listing. ",
    "url": "https://github.com/GongRzhe/REDIS-MCP-Server"
  },
  {
    "name": "Redis",
    "description": "MCP server to interact with Redis Server, AWS Memory DB, etc for caching or other use-cases where in-memory and key-value based storage is appropriate ",
    "url": "https://github.com/prajwalnayak7/mcp-server-redis"
  },
  {
    "name": "Rememberizer AI",
    "description": "An MCP server designed for interacting with the Rememberizer data source, facilitating enhanced knowledge retrieval. ",
    "url": "https://github.com/skydeckai/mcp-server-rememberizer"
  },
  {
    "name": "Replicate",
    "description": "Search, run and manage machine learning models on Replicate through a simple tool-based interface. Browse models, create predictions, track their status, and handle generated images. ",
    "url": "https://github.com/deepfates/mcp-replicate"
  },
  {
    "name": "Rquest",
    "description": "An MCP server providing realistic browser-like HTTP request capabilities with accurate TLS/JA3/JA4 fingerprints for bypassing anti-bot measures. ",
    "url": "https://github.com/xxxbrian/mcp-rquest"
  },
  {
    "name": "Rijksmuseum",
    "description": "Interface with the Rijksmuseum API to search artworks, retrieve artwork details, access image tiles, and explore user collections. ",
    "url": "https://github.com/r-huijts/rijksmuseum-mcp"
  },
  {
    "name": "Salesforce MCP",
    "description": "Interact with Salesforce Data and Metadata ",
    "url": "https://github.com/smn2gnt/MCP-Salesforce"
  },
  {
    "name": "Scholarly",
    "description": "A MCP server to search for scholarly and academic articles. ",
    "url": "https://github.com/adityak74/mcp-scholarly"
  },
  {
    "name": "scrapling-fetch",
    "description": "Access text content from bot-protected websites. Fetches HTML/markdown from sites with anti-automation measures using Scrapling. ",
    "url": "https://github.com/cyberchitta/scrapling-fetch-mcp"
  },
  {
    "name": "SearXNG",
    "description": "A Model Context Protocol Server for SearXNG ",
    "url": "https://github.com/ihor-sokoliuk/mcp-searxng"
  },
  {
    "name": "ServiceNow",
    "description": "A MCP server to interact with a ServiceNow instance ",
    "url": "https://github.com/osomai/servicenow-mcp"
  },
  {
    "name": "Shopify",
    "description": "MCP to interact with Shopify API including order, product, customers and so on. ",
    "url": "https://github.com/GeLi2001/shopify-mcp"
  },
  {
    "name": "Siri Shortcuts",
    "description": "MCP to interact with Siri Shortcuts on macOS. Exposes all Shortcuts as MCP tools. ",
    "url": "https://github.com/dvcrn/mcp-server-siri-shortcuts"
  },
  {
    "name": "Snowflake",
    "description": "This MCP server enables LLMs to interact with Snowflake databases, allowing for secure and controlled data operations. ",
    "url": "https://github.com/isaacwasserman/mcp-snowflake-server"
  },
  {
    "name": "Solana Agent Kit",
    "description": "This MCP server enables LLMs to interact with the Solana blockchain with help of Solana Agent Kit by SendAI, allowing for 40+ protcool actions and growing ",
    "url": "https://github.com/sendaifun/solana-agent-kit/tree/main/examples/agent-kit-mcp-server"
  },
  {
    "name": "Spotify",
    "description": "This MCP allows an LLM to play and use Spotify. ",
    "url": "https://github.com/varunneal/spotify-mcp"
  },
  {
    "name": "Starwind UI",
    "description": "This MCP provides relevant commands, documentation, and other information to allow LLMs to take full advantage of Starwind UI's open source Astro components. ",
    "url": "https://github.com/Boston343/starwind-ui-mcp/"
  },
  {
    "name": "Stripe",
    "description": "This MCP allows integration with Stripe for handling payments, customers, and refunds. ",
    "url": "https://github.com/atharvagupta2003/mcp-stripe"
  },
  {
    "name": "ShaderToy",
    "description": "This MCP server lets LLMs to interact with the ShaderToy API, allowing LLMs to learn from compute shaders examples and enabling them to create complex GLSL shaders that they are previously not capable of. ",
    "url": "https://github.com/wilsonchenghy/ShaderToy-MCP"
  },
  {
    "name": "TMDB",
    "description": "This MCP server integrates with The Movie Database (TMDB) API to provide movie information, search capabilities, and recommendations. ",
    "url": "https://github.com/Laksh-star/mcp-server-tmdb"
  },
  {
    "name": "Tavily search",
    "description": "An MCP server for Tavily's search & news API, with explicit site inclusions/exclusions ",
    "url": "https://github.com/RamXX/mcp-tavily"
  },
  {
    "name": "Telegram",
    "description": "An MCP server that provides paginated chat reading, message retrieval, and message sending capabilities for Telegram through Telethon integration. ",
    "url": "https://github.com/chigwell/telegram-mcp"
  },
  {
    "name": "Terminal-Control",
    "description": "A MCP server that enables secure terminal command execution, directory navigation, and file system operations through a standardized interface. ",
    "url": "https://github.com/GongRzhe/terminal-controller-mcp"
  },
  {
    "name": "TFT-Match-Analyzer",
    "description": "MCP server for teamfight tactics match history & match details fetching, providing user the detailed context for every match. ",
    "url": "https://github.com/GeLi2001/tft-mcp-server"
  },
  {
    "name": "Ticketmaster",
    "description": "Search for events, venues, and attractions through the Ticketmaster Discovery API ",
    "url": "https://github.com/delorenj/mcp-server-ticketmaster"
  },
  {
    "name": "Todoist",
    "description": "Interact with Todoist to manage your tasks. ",
    "url": "https://github.com/abhiz123/todoist-mcp-server"
  },
  {
    "name": "Typesense",
    "description": "A Model Context Protocol (MCP) server implementation that provides AI models with access to Typesense search capabilities. This server enables LLMs to discover, search, and analyze data stored in Typesense collections. ",
    "url": "https://github.com/suhail-ak-s/mcp-typesense-server"
  },
  {
    "name": "Travel Planner",
    "description": "Travel planning and itinerary management server integrating with Google Maps API for location search, place details, and route calculations. ",
    "url": "https://github.com/GongRzhe/TRAVEL-PLANNER-MCP-Server"
  },
  {
    "name": "Unity Catalog",
    "description": "An MCP server that enables LLMs to interact with Unity Catalog AI, supporting CRUD operations on Unity Catalog Functions and executing them as MCP tools. ",
    "url": "https://github.com/ognis1205/mcp-server-unitycatalog"
  },
  {
    "name": "Unity3d Game Engine",
    "description": "An MCP server that enables LLMs to interact with Unity3d Game Engine, supporting access to a variety of the Unit's Editor engine tools (e.g. Console Logs, Test Runner logs, Editor functions, hierarchy state, etc) and executing them as MCP tools or gather them as resources. ",
    "url": "https://github.com/CoderGamester/mcp-unity"
  },
  {
    "name": "Unity Integration (Advanced)",
    "description": "Advanced Unity3d Game Engine MCP which supports ,Execution of Any Editor Related Code Directly Inside of Unity, Fetch Logs, Get Editor State and Allow File Access of the Project making it much more useful in Script Editing or asset creation. ",
    "url": "https://github.com/quazaai/UnityMCPIntegration"
  },
  {
    "name": "Vega-Lite",
    "description": "Generate visualizations from fetched data using the VegaLite format and renderer. ",
    "url": "https://github.com/isaacwasserman/mcp-vegalite-server"
  },
  {
    "name": "Video Editor",
    "description": "A Model Context Protocol Server to add, edit, and search videos with Video Jungle. ",
    "url": "https://github.com/burningion/video-editing-mcp"
  },
  {
    "name": "Virtual location (Google Street View,etc.)",
    "description": "Integrates Google Map, Google Street View, PixAI, Stability.ai, ComfyUI API and Bluesky to provide a virtual location simulation in LLM (written in Effect.ts) ",
    "url": "https://github.com/mfukushim/map-traveler-mcp"
  },
  {
    "name": "VolcEngine TOS",
    "description": "A sample MCP server for VolcEngine TOS that flexibly get objects from TOS. ",
    "url": "https://github.com/dinghuazhou/sample-mcp-server-tos"
  },
  {
    "name": "Wanaku MCP Router",
    "description": "The Wanaku MCP Router is a SSE-based MCP server that provides an extensible routing engine that allows integrating your enterprise systems with AI agents. ",
    "url": "https://github.com/wanaku-ai/wanaku/"
  },
  {
    "name": "Webflow",
    "description": "Interfact with the Webflow APIs ",
    "url": "https://github.com/kapilduraphe/webflow-mcp-server"
  },
  {
    "name": "whale-tracker-mcp",
    "description": "A mcp server for tracking cryptocurrency whale transactions. ",
    "url": "https://github.com/kukapay/whale-tracker-mcp"
  },
  {
    "name": "Whois MCP",
    "description": "MCP server that performs whois lookup against domain, IP, ASN and TLD. ",
    "url": "https://github.com/bharathvaj-ganesan/whois-mcp"
  },
  {
    "name": "Wikidata MCP",
    "description": "Wikidata MCP server that interact with Wikidata, by searching identifiers, extracting metadata, and executing sparql query. ",
    "url": "https://github.com/zzaebok/mcp-wikidata"
  },
  {
    "name": "WildFly MCP",
    "description": "WildFly MCP server that enables LLM to interact with running WildFly servers (retrieve metrics, logs, invoke operations, ...). ",
    "url": "https://github.com/wildfly-extras/wildfly-mcp"
  },
  {
    "name": "Windows CLI",
    "description": "MCP server for secure command-line interactions on Windows systems, enabling controlled access to PowerShell, CMD, and Git Bash shells. ",
    "url": "https://github.com/SimonB97/win-cli-mcp-server"
  },
  {
    "name": "World Bank data API",
    "description": "A server that fetches data indicators available with the World Bank as part of their data API ",
    "url": "https://github.com/anshumax/world_bank_mcp_server"
  },
  {
    "name": "X (Twitter)",
    "description": "(by EnesCinr) - Interact with twitter API. Post tweets and search for tweets by query. ",
    "url": "https://github.com/EnesCinr/twitter-mcp"
  },
  {
    "name": "X (Twitter)",
    "description": "(by vidhupv) - Create, manage and publish X/Twitter posts directly through Claude chat. ",
    "url": "https://github.com/vidhupv/x-mcp"
  },
  {
    "name": "xcodebuild",
    "description": "🍎 Build iOS Xcode workspace/project and feed back errors to llm. ",
    "url": "https://github.com/ShenghaiWang/xcodebuild"
  },
  {
    "name": "Xero-mcp-server",
    "description": "Enabling clients to interact with Xero system for streamlined accounting, invoicing, and business operations. ",
    "url": "https://github.com/john-zhang-dev/xero-mcp"
  },
  {
    "name": "XiYan",
    "description": "🗄️ An MCP server that supports fetching data from a database using natural language queries, powered by XiyanSQL as the text-to-SQL LLM. ",
    "url": "https://github.com/XGenerationLab/xiyan_mcp_server"
  },
  {
    "name": "XMind",
    "description": "Read and search through your XMind directory containing XMind files. ",
    "url": "https://github.com/apeyroux/mcp-xmind"
  },
  {
    "name": "YouTube",
    "description": "Comprehensive YouTube API integration for video management, Shorts creation, and analytics. ",
    "url": "https://github.com/ZubeidHendricks/youtube-mcp-server"
  }
];

// The full dataset is too large to include here, but we're using a representative subset
const firstNServers = serverData.slice(0, 100); // Using first 100 servers for example

// Convert the server data to our CardData format
export const realCards: CardData[] = firstNServers.map((server, index) => ({
  id: String(index + 1),
  imgUrl: getImageForServer(server.name, server.description),
  title: server.name,
  description: server.description,
  url: server.url,
  tags: ['OpenSource'],
  metadata: {
    Production_Status: '',
    Tags: [],
    Deployment_Type: '',
    Security_Review_Status: ''
  }
}));

// Here we'd include all 269 servers from the provided list
export const allCards: CardData[] = serverData.map((server, index) => ({
  id: String(index + 1),
  imgUrl: getImageForServer(server.name, server.description),
  title: server.name,
  description: server.description,
  url: server.url,
  tags: ['OpenSource'],
  metadata: {
    Production_Status: '',
    Tags: [],
    Deployment_Type: '',
    Security_Review_Status: ''
  }
}));
