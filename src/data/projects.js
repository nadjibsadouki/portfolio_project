import adContentWorkflowImage from '../assets/workflows/ai-ad-content-analysis.png'
import telegramCampaignWorkflowImage from '../assets/workflows/ai-telegram-campaign-assistant.png'
import facelessVideoWorkflowImage from '../assets/workflows/automated-faceless-video-pipeline.png'
import b2bLeadEnrichmentWorkflowImage from '../assets/workflows/b2b-lead-enrichment-scoring-onboarding.png'
import blogSocialPipelineWorkflowImage from '../assets/workflows/automated-blog-social-media-pipeline.png'
import ecommerceAiMarketingAgentWorkflowImage from '../assets/workflows/ecommerce-ai-marketing-agent.png'
import restaurantOrderingAssistantWorkflowImage from '../assets/workflows/ai-restaurant-ordering-assistant.png'

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} description
 * @property {string} category
 * @property {string[]} technologies
 * @property {string} [workflowImage]
 * @property {boolean} featured
 * @property {string} problem
 * @property {string} solution
 * @property {Array<{id: string, title: string, description?: string}>} workflowSteps
 * @property {Array<Record<string, unknown>>} nodes
 * @property {string} result
 */

/** @type {Project[]} */
const projects = [
  {
    id: 'ai-powered-ad-content-analysis-pipeline',
    title: 'AI-Powered Ad Content Analysis Pipeline',
    shortDescription:
      'An automated n8n pipeline that filters, processes and analyzes ad content using AI, with dedicated workflows for videos, images and text.',
    description:
      'I built an n8n automation that automatically filters incoming content, detects its format and routes it through the appropriate processing pipeline. AI models analyze the content, while the results are automatically organized in Google Sheets.',
    category: 'AI Automation',
    technologies: ['n8n', 'AI / LLM', 'HTTP APIs', 'Google Drive', 'Google Sheets', 'Apify / Actor'],
    workflowImage: adContentWorkflowImage,
    featured: true,
    problem:
      'Analyzing large volumes of advertising content manually is time-consuming, especially when videos, images and text require different processing methods.',
    solution:
      'The workflow automatically filters incoming content, separates it by type and sends each format through a dedicated processing pipeline. AI is then used to analyze the content and the results are stored in Google Sheets.',
    workflowSteps: [
      { id: 'trigger', title: 'Trigger workflow' },
      { id: 'fetch', title: 'Fetch content' },
      { id: 'filter', title: 'Filter by engagement' },
      { id: 'route', title: 'Route content by type' },
      { id: 'process-videos', title: 'Process videos' },
      { id: 'analyze-images', title: 'Analyze images with AI' },
      { id: 'analyze-text', title: 'Analyze text with AI' },
      { id: 'store-results', title: 'Store analysis results' },
      { id: 'control-flow', title: 'Control execution with loops and wait nodes' }
    ],
    nodes: [
      { id: 'trigger', type: 'n8n.trigger', label: 'Workflow Trigger' },
      { id: 'fetch', type: 'httpRequest', label: 'Fetch Content' },
      { id: 'filter', type: 'if', label: 'Engagement Filter' },
      { id: 'route', type: 'switch', label: 'Route by Type' },
      { id: 'video', type: 'code', label: 'Video Processing' },
      { id: 'image', type: 'aiModel', label: 'Image Analysis' },
      { id: 'text', type: 'aiModel', label: 'Text Analysis' },
      { id: 'sheet', type: 'googleSheets', label: 'Store Results' },
      { id: 'loop', type: 'loop', label: 'Control Flow' }
    ],
    result:
      'An automated workflow for organizing and analyzing ad content across different formats using AI-driven processing and structured spreadsheet output.'
  },
  {
    id: 'ai-powered-telegram-campaign-assistant',
    title: 'AI-Powered Telegram Campaign Assistant',
    shortDescription:
      'An AI-powered Telegram assistant that analyzes images, uses brand context and generates campaign-related responses through automated workflows.',
    description:
      'This n8n workflow connects Telegram with AI to process image inputs, analyze visual content and handle campaign-related interactions. It also includes brand memory and a fallback AI path for processing feedback or other inputs.',
    category: 'AI Automation',
    technologies: [
      'n8n',
      'Telegram',
      'Gemini / AI',
      'Binary file processing',
      'Conditional routing',
      'Brand memory',
      'AI output parsing'
    ],
    workflowImage: telegramCampaignWorkflowImage,
    featured: false,
    problem:
      'Handling campaign-related content manually can require switching between messaging, image analysis and content processing tools.',
    solution:
      'The workflow centralizes these interactions inside Telegram. It detects the type of incoming input, processes images through an AI analysis pipeline, stores brand-related information and uses a dedicated AI fallback for feedback or other inputs.',
    workflowSteps: [
      { id: 'receive-telegram-input', title: 'Receive an input through Telegram' },
      { id: 'detect-input-type', title: 'Detect the input type' },
      { id: 'retrieve-image-file', title: 'Retrieve the image file when a photo is received' },
      { id: 'download-image-binary', title: 'Download the image binary' },
      { id: 'analyze-image', title: 'Analyze the image with AI' },
      { id: 'parse-ai-output', title: 'Parse the AI output' },
      { id: 'send-generated-response', title: 'Send the generated response through Telegram' },
      { id: 'store-brand-information', title: 'Store brand-related information when required' },
      { id: 'process-fallback-input', title: 'Process fallback inputs with an AI feedback workflow' },
      { id: 'send-final-response', title: 'Send the final response through Telegram' }
    ],
    nodes: [
      { id: 'telegram-input', type: 'telegramTrigger', label: 'Receive Telegram Input' },
      { id: 'input-router', type: 'switch', label: 'Detect Input Type' },
      { id: 'get-image', type: 'telegram', label: 'Retrieve Image File' },
      { id: 'download-image', type: 'binary', label: 'Download Image Binary' },
      { id: 'image-analysis', type: 'aiModel', label: 'Analyze Image with AI' },
      { id: 'parse-output', type: 'code', label: 'Parse AI Output' },
      { id: 'generated-response', type: 'telegram', label: 'Send Generated Response' },
      { id: 'brand-memory', type: 'memory', label: 'Store Brand Information' },
      { id: 'feedback-workflow', type: 'aiModel', label: 'Process Fallback Input' },
      { id: 'final-response', type: 'telegram', label: 'Send Final Response' }
    ],
    result:
      'Telegram inputs are routed through image analysis, brand-information storage or AI feedback processing, with responses sent through Telegram.'
  },
  {
    id: 'automated-faceless-video-content-pipeline',
    title: 'Automated Faceless Video Content Pipeline',
    shortDescription:
      'An automated n8n pipeline for creating faceless video content and distributing it across multiple platforms, with AI, automated media processing and content tracking.',
    description:
      'This n8n workflow automates a large part of the faceless video production pipeline, from content preparation and media processing to final video distribution. It connects AI, APIs, cloud storage and social platforms into a single automated system.',
    category: 'AI Automation',
    technologies: [
      'n8n',
      'AI / LLM',
      'HTTP APIs',
      'Google Drive',
      'Google Sheets',
      'Telegram',
      'Instagram',
      'Facebook',
      'YouTube',
      'Video / media processing'
    ],
    workflowImage: facelessVideoWorkflowImage,
    featured: false,
    problem:
      'Creating and publishing faceless videos manually requires multiple repetitive steps, from preparing content and media assets to uploading and tracking videos across different platforms.',
    solution:
      'The workflow automates the content production pipeline, processes the required media assets, prepares the final video and distributes it across multiple platforms. Content and publishing information are also tracked through connected services.',
    workflowSteps: [
      { id: 'trigger-workflow', title: 'Trigger the workflow' },
      { id: 'retrieve-topic', title: 'Retrieve a new content topic' },
      { id: 'prepare-content', title: 'Generate and prepare the video content' },
      { id: 'process-media-assets', title: 'Generate and process media assets' },
      { id: 'wait-processing', title: 'Wait for asynchronous processing' },
      { id: 'assemble-video', title: 'Assemble and process the video' },
      { id: 'prepare-final-video', title: 'Prepare the final video' },
      { id: 'publish-content', title: 'Publish the content to social platforms' },
      { id: 'store-media', title: 'Store generated media' },
      { id: 'update-tracking', title: 'Update content status and tracking data' }
    ],
    nodes: [
      { id: 'trigger', type: 'n8n.trigger', label: 'Workflow Trigger' },
      { id: 'topic', type: 'contentSource', label: 'Retrieve Content Topic' },
      { id: 'content', type: 'aiModel', label: 'Prepare Video Content' },
      { id: 'media', type: 'mediaProcessing', label: 'Generate and Process Media' },
      { id: 'wait', type: 'wait', label: 'Wait for Processing' },
      { id: 'assemble', type: 'mediaProcessing', label: 'Assemble Video' },
      { id: 'final-video', type: 'video', label: 'Prepare Final Video' },
      { id: 'publish', type: 'socialPlatforms', label: 'Publish to Social Platforms' },
      { id: 'storage', type: 'googleDrive', label: 'Store Generated Media' },
      { id: 'tracking', type: 'googleSheets', label: 'Update Content Tracking' }
    ],
    result:
      'The workflow connects content preparation, media processing, video distribution, cloud storage and publishing-status tracking in an automated pipeline.'
  },
  {
    id: 'b2b-lead-enrichment-scoring-automated-onboarding',
    title: 'B2B Lead Enrichment, Scoring & Automated Onboarding',
    shortDescription:
      'An automated B2B lead pipeline that enriches, scores and qualifies leads before triggering personalized onboarding and follow-up actions.',
    description:
      'This n8n workflow automates a B2B lead management pipeline by validating incoming lead data, enriching lead information, applying qualification and scoring logic, and triggering appropriate onboarding and follow-up actions across connected services.',
    category: 'Business Automation',
    technologies: [
      'n8n',
      'Google Sheets',
      'Google Drive',
      'Gmail',
      'HTTP / API integrations',
      'Lead enrichment',
      'Lead scoring',
      'Conditional routing',
      'Automated onboarding'
    ],
    workflowImage: b2bLeadEnrichmentWorkflowImage,
    featured: false,
    problem:
      'B2B lead management often involves repetitive data collection, enrichment, qualification and onboarding tasks across multiple tools.',
    solution:
      'The workflow centralizes and automates the lead lifecycle. Incoming data is validated, lead information is enriched and structured, qualification and scoring logic is applied, and different actions are triggered depending on the lead status.',
    workflowSteps: [
      { id: 'receive-lead', title: 'Receive a new lead' },
      { id: 'validate-data', title: 'Validate incoming data' },
      { id: 'check-existing-lead', title: 'Check existing lead information' },
      { id: 'enrich-lead', title: 'Enrich lead data' },
      { id: 'structure-information', title: 'Process and structure enriched information' },
      { id: 'qualify-lead', title: 'Apply qualification logic' },
      { id: 'score-lead', title: 'Score the lead' },
      { id: 'route-lead', title: 'Route the lead based on its status' },
      { id: 'trigger-onboarding', title: 'Trigger onboarding actions' },
      { id: 'notify-and-track', title: 'Send notifications and update tracking data' }
    ],
    nodes: [
      { id: 'lead-input', type: 'n8n.trigger', label: 'Receive New Lead' },
      { id: 'validation', type: 'validation', label: 'Validate Lead Data' },
      { id: 'existing-lead', type: 'googleSheets', label: 'Check Existing Lead' },
      { id: 'enrichment', type: 'httpRequest', label: 'Enrich Lead Data' },
      { id: 'structure', type: 'code', label: 'Structure Lead Information' },
      { id: 'qualification', type: 'if', label: 'Qualify Lead' },
      { id: 'scoring', type: 'scoring', label: 'Score Lead' },
      { id: 'routing', type: 'switch', label: 'Route by Lead Status' },
      { id: 'onboarding', type: 'googleDrive', label: 'Trigger Onboarding' },
      { id: 'notifications', type: 'gmail', label: 'Send Notifications' },
      { id: 'tracking', type: 'googleSheets', label: 'Update Tracking Data' }
    ],
    result:
      'An automated lead lifecycle that validates, enriches, qualifies and scores incoming leads before routing onboarding, notification and tracking actions.'
  },
  {
    id: 'automated-blog-social-media-content-pipeline',
    title: 'Automated Blog & Social Media Content Pipeline',
    shortDescription:
      'An automated content pipeline that transforms topics into AI-generated blog articles and social media posts, with publishing and content management across multiple platforms.',
    description:
      'This n8n workflow automates the content creation process from topic retrieval and dynamic AI prompt preparation to blog publishing and social media content generation. It connects AI, Google Sheets, WordPress and social platforms into a single content automation pipeline.',
    category: 'Content Automation',
    technologies: [
      'n8n',
      'AI / LLM',
      'Google Sheets',
      'WordPress',
      'X / Twitter',
      'LinkedIn',
      'Google Docs',
      'Content automation'
    ],
    workflowImage: blogSocialPipelineWorkflowImage,
    featured: false,
    problem:
      'Creating blog articles and adapting the same topic for multiple social platforms requires repetitive content preparation and publishing tasks.',
    solution:
      'The workflow centralizes content creation by retrieving topics and AI prompts, generating blog and social content, publishing articles to WordPress and routing social content to the appropriate platforms.',
    workflowSteps: [
      { id: 'retrieve-topic', title: 'Retrieve a content topic' },
      { id: 'load-prompts', title: 'Load dynamic AI prompts' },
      { id: 'inject-topic-details', title: 'Inject topic details into prompts' },
      { id: 'generate-content', title: 'Generate blog and social content with AI' },
      { id: 'prepare-html', title: 'Clean and prepare generated HTML' },
      { id: 'publish-wordpress', title: 'Publish the article to WordPress' },
      { id: 'generate-platform-content', title: 'Generate platform-specific social content' },
      { id: 'route-social-content', title: 'Route content to the appropriate platforms' },
      { id: 'create-documents', title: 'Create supporting content documents' },
      { id: 'store-content-assets', title: 'Store and update content assets' }
    ],
    nodes: [
      { id: 'topic', type: 'googleSheets', label: 'Retrieve Content Topic' },
      { id: 'prompts', type: 'googleSheets', label: 'Load Dynamic AI Prompts' },
      { id: 'prepare-prompt', type: 'code', label: 'Inject Topic Details' },
      { id: 'generate-content', type: 'aiModel', label: 'Generate Blog and Social Content' },
      { id: 'prepare-html', type: 'code', label: 'Clean Generated HTML' },
      { id: 'wordpress', type: 'wordpress', label: 'Publish Article' },
      { id: 'platform-content', type: 'aiModel', label: 'Generate Platform-Specific Content' },
      { id: 'social-routing', type: 'switch', label: 'Route Social Content' },
      { id: 'documents', type: 'googleDocs', label: 'Create Content Documents' },
      { id: 'assets', type: 'googleSheets', label: 'Store and Update Content Assets' }
    ],
    result:
      'The workflow connects topic and prompt retrieval, AI content generation, WordPress publishing, conditional social-content routing, document creation and content-asset updates.'
  },
  {
    id: 'e-commerce-ai-marketing-agent',
    title: 'E-commerce AI Marketing Agent',
    shortDescription:
      'An AI-powered e-commerce assistant that connects Telegram with Shopify to analyze products, orders, sales and customer data while helping users find relevant products.',
    description:
      'This n8n workflow connects Telegram, AI and Shopify into a conversational e-commerce assistant. It can interpret user requests, retrieve relevant store data, analyze products, orders, sales or customer information, and return AI-powered responses through Telegram. It also includes a product recommendation flow that helps users find relevant products based on their needs.',
    category: 'E-commerce Automation',
    technologies: [
      'n8n',
      'Telegram',
      'Shopify',
      'AI / LLM',
      'HTTP / API integrations',
      'Conversational AI',
      'Product recommendation',
      'E-commerce automation'
    ],
    workflowImage: ecommerceAiMarketingAgentWorkflowImage,
    featured: false,
    problem:
      'E-commerce operations often require switching between store data, customer requests and product information to answer questions or assist shoppers.',
    solution:
      'The workflow centralizes these interactions in a conversational Telegram assistant connected to Shopify. AI interprets requests, retrieves the relevant store information and generates responses. A dedicated product recommendation flow can also identify products based on the user\'s needs.',
    workflowSteps: [
      { id: 'receive-telegram-message', title: 'Receive a Telegram message' },
      { id: 'interpret-request', title: 'Interpret the user\'s request with AI' },
      { id: 'structure-classify-request', title: 'Structure and classify the request' },
      { id: 'retrieve-shopify-data', title: 'Retrieve relevant Shopify data' },
      { id: 'analyze-store-data', title: 'Analyze orders, products, sales or customers' },
      { id: 'generate-ai-response', title: 'Generate an AI-powered response' },
      { id: 'return-telegram-response', title: 'Return the response through Telegram' },
      { id: 'handle-product-recommendation', title: 'Handle product recommendation requests' },
      { id: 'understand-product-needs', title: 'Understand the user\'s product needs' },
      { id: 'search-shopify-products', title: 'Search Shopify products and return a relevant recommendation' }
    ],
    nodes: [
      { id: 'telegram-message', type: 'telegramTrigger', label: 'Receive Telegram Message' },
      { id: 'request-ai', type: 'aiModel', label: 'Interpret User Request' },
      { id: 'request-structure', type: 'code', label: 'Structure and Classify Request' },
      { id: 'shopify-data', type: 'shopify', label: 'Retrieve Shopify Data' },
      { id: 'store-analysis', type: 'aiModel', label: 'Analyze Store Data' },
      { id: 'response-generation', type: 'aiModel', label: 'Generate Response' },
      { id: 'telegram-response', type: 'telegram', label: 'Return Telegram Response' },
      { id: 'product-needs', type: 'aiModel', label: 'Understand Product Needs' },
      { id: 'product-search', type: 'shopify', label: 'Search Shopify Products' },
      { id: 'product-recommendation', type: 'telegram', label: 'Return Product Recommendation' }
    ],
    result:
      'A conversational Telegram assistant that uses AI to retrieve and analyze Shopify information, respond to store-related requests and recommend relevant products.'
  },
  {
    id: 'ai-restaurant-ordering-assistant',
    title: 'AI Restaurant Ordering Assistant',
    shortDescription:
      'An AI-powered Telegram restaurant assistant that answers customer questions, manages orders and uses a restaurant knowledge base to provide contextual responses.',
    description:
      'This n8n workflow connects Telegram with AI, restaurant knowledge and Google Sheets to create a conversational restaurant assistant. It interprets incoming customer requests, classifies them, retrieves relevant information and handles order-related interactions before responding through Telegram.',
    category: 'Conversational Automation',
    technologies: [
      'n8n',
      'Telegram',
      'Google Gemini',
      'Google Sheets',
      'AI / LLM',
      'Simple Memory',
      'Vector embeddings',
      'Restaurant knowledge base',
      'Conversational automation'
    ],
    workflowImage: restaurantOrderingAssistantWorkflowImage,
    featured: false,
    problem:
      'Restaurant customers may need quick answers about the restaurant while staff also have to manage incoming orders and repetitive requests.',
    solution:
      'The workflow centralizes customer interactions in Telegram. AI interprets and classifies incoming requests, restaurant knowledge is used for contextual questions, and Google Sheets is used for order-related data and operations.',
    workflowSteps: [
      { id: 'receive-customer-message', title: 'Receive a customer message through Telegram' },
      { id: 'interpret-request', title: 'Interpret and structure the request with AI' },
      { id: 'classify-request', title: 'Classify the request type' },
      { id: 'route-request', title: 'Route the request to the appropriate workflow' },
      { id: 'retrieve-order-information', title: 'Retrieve order information when required' },
      { id: 'retrieve-restaurant-knowledge', title: 'Use restaurant knowledge for expert questions' },
      { id: 'process-order-operations', title: 'Process order-related operations' },
      { id: 'store-order-information', title: 'Store or update order information' },
      { id: 'generate-response', title: 'Generate the appropriate response' },
      { id: 'send-telegram-response', title: 'Send the response back through Telegram' }
    ],
    nodes: [
      { id: 'telegram-message', type: 'telegramTrigger', label: 'Receive Customer Message' },
      { id: 'request-ai', type: 'aiModel', label: 'Interpret and Structure Request' },
      { id: 'request-classification', type: 'switch', label: 'Classify and Route Request' },
      { id: 'order-information', type: 'googleSheets', label: 'Retrieve Order Information' },
      { id: 'restaurant-knowledge', type: 'vectorStore', label: 'Retrieve Restaurant Knowledge' },
      { id: 'order-operations', type: 'googleSheets', label: 'Process Order Operations' },
      { id: 'order-update', type: 'googleSheets', label: 'Store or Update Order Information' },
      { id: 'response-generation', type: 'aiModel', label: 'Generate Response' },
      { id: 'telegram-response', type: 'telegram', label: 'Send Telegram Response' }
    ],
    result:
      'A Telegram-based restaurant assistant that routes customer requests, uses restaurant knowledge for contextual questions and Google Sheets for order-related information and operations.'
  }
]

export default projects