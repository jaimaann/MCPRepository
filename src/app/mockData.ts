import { CardData } from '@/components/Card';

export const mockCards: CardData[] = [
  {
    id: '1',
    imgUrl: '/images/cloud-computing.jpg',
    title: 'Cloud Infrastructure Management',
    description: 'A comprehensive solution for managing cloud infrastructure across multiple providers with automated scaling and resource optimization.',
    tags: ['Cloud', 'DevOps', 'Automation'],
    metadata: {
      Production_Status: 'Stable',
      Tags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Infrastructure as Code'],
      Deployment_Type: 'SaaS',
      Security_Review_Status: 'Approved'
    }
  },
  {
    id: '2',
    imgUrl: '/images/data-analytics.jpg',
    title: 'Data Analytics Platform',
    description: 'Advanced analytics platform that integrates with various data sources to provide real-time insights and visualizations for business intelligence.',
    tags: ['Analytics', 'Big Data', 'Visualization'],
    metadata: {
      Production_Status: 'Beta',
      Tags: ['Python', 'Machine Learning', 'Data Science', 'Business Intelligence'],
      Deployment_Type: 'Hybrid',
      Security_Review_Status: 'In Review'
    }
  },
  {
    id: '3',
    imgUrl: '/images/cloud-computing.jpg',
    title: 'Microservices API Gateway',
    description: 'An enterprise-grade API gateway for managing microservices architectures with advanced security, routing, and monitoring capabilities.',
    tags: ['Microservices', 'API', 'Security'],
    metadata: {
      Production_Status: 'Stable',
      Tags: ['Kubernetes', 'Docker', 'API Management', 'Service Mesh'],
      Deployment_Type: 'On-Prem',
      Security_Review_Status: 'Approved'
    }
  },
  {
    id: '4',
    imgUrl: '/images/data-analytics.jpg',
    title: 'ML Deployment Pipeline',
    description: 'End-to-end pipeline for deploying machine learning models to production with monitoring, versioning, and A/B testing capabilities.',
    tags: ['Machine Learning', 'DevOps', 'MLOps'],
    metadata: {
      Production_Status: 'Alpha',
      Tags: ['TensorFlow', 'PyTorch', 'Kubeflow', 'CI/CD'],
      Deployment_Type: 'Hybrid',
      Security_Review_Status: 'Pending'
    }
  }
];
