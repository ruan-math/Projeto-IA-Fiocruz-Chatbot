# 🤖 Assistente de Documentos Fiocruz

Sistema de chat inteligente baseado em RAG (Retrieval Augmented Generation) que utiliza Azure AI Search, Cosmos DB e modelos de linguagem para fornecer respostas precisas baseadas em documentos institucionais da Fiocruz. O sistema implementa uma arquitetura moderna com separação de responsabilidades, normalização de dados e interface otimizada.

### 🎯 Funcionalidades Principais

- **Chat Inteligente**: Interface de conversação com IA baseada em documentos institucionais
- **Busca Semântica**: Integração com Azure AI Search para recuperação de documentos relevantes
- **Reranking**: Sistema de reordenação de resultados usando Cohere
- **Gestão de Conversas**: Histórico persistente com estrutura normalizada
- **Citações**: Sistema de referências com links para documentos originais
- **Feedback**: Sistema de avaliação de respostas
- **Autenticação**: Integração com Azure AD (MSAL)

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **Next.js 15.2.4** - Framework React com App Router
- **React 18.3.1** - Biblioteca de interface de usuário
- **TypeScript 5** - Linguagem de programação tipada
- **Tailwind CSS 4.1.9** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Framer Motion 12.23.12** - Animações e transições
- **React Markdown 10.1.0** - Renderização de markdown

### **Backend & Serviços**
- **Azure AI Search 12.1.0** - Busca semântica e vetorial
- **Azure Cosmos DB 4.5.0** - Banco de dados NoSQL
- **Azure OpenAI** - Modelos de linguagem GPT
- **LangChain 0.1.15** - Framework para aplicações LLM
- **Cohere 7.7.5** - Reranking de documentos
- **MSAL Browser 4.20.0** - Autenticação Azure AD

### **Ferramentas de Desenvolvimento**
- **ESLint** - Linting de código
- **PostCSS 8.5** - Processamento CSS
- **UUID 9.0.1** - Geração de identificadores únicos
- **Date-fns 4.1.0** - Manipulação de datas

## 📦 Principais Dependências

```json
{
  "dependencies": {
    "next": "15.2.4",
    "react": "^18.3.1",
    "typescript": "^5",
    "@azure/cosmos": "^4.5.0",
    "@azure/search-documents": "^12.1.0",
    "@azure/msal-browser": "^4.20.0",
    "@langchain/openai": "^0.6.7",
    "@langchain/community": "^0.0.45",
    "cohere-ai": "^7.7.5",
    "tailwindcss": "^4.1.9",
    "framer-motion": "^12.23.12",
    "react-markdown": "^10.1.0",
    "uuid": "^9.0.1"
  }
}
```

## 🚀 Como Implementar

### **Pré-requisitos**
- Node.js 18+
- npm
- Conta Azure com serviços configurados

### **1. Clone o Repositório**
```bash
git clone <repository-url>
cd IA-Fiocruz-Chatbot
```

### **2. Instale as Dependências**
```bash
npm install
```

### **3. Configure as Variáveis de Ambiente**
Copie o arquivo `env.example` para `.env.local` e configure as variáveis:

```bash
cp env.example .env.local
```

### **4. Configure os Serviços Azure**

#### **Azure AI Search**
- Crie um serviço de busca no Azure
- Configure um índice com os documentos
- Obtenha a chave de API

#### **Azure Cosmos DB**
- Crie uma conta Cosmos DB
- Configure o banco de dados e containers
- Obtenha a chave primária

#### **Azure OpenAI**
- Configure um recurso Azure OpenAI
- Deploy dos modelos GPT e embeddings
- Obtenha a chave de API

#### **Azure AD (MSAL)**
- Registre a aplicação no Azure AD
- Configure as permissões necessárias
- Obtenha o Client ID e Tenant ID

### **5. Execute o Projeto**
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build
npm start

# Linting
npm run lint
```

## 🔧 Configuração do Ambiente (.env.local)

```AZURE_OPENAI_API_KEY=yourkey-your_azure_openai_api_key_here
AZURE_OPENAI_API_INSTANCE_NAME=youropenai
AZURE_OPENAI_BASE_ENDPOINT=https://your.openai.azure.com/
AZURE_OPENAI_API_VERSION=2024-04-01-preview
AZURE_OPENAI_API_DEPLOYMENT_NAME=gpt-4o
 
# Azure OpenAI Embeddings
AZURE_OPENAI_EMBEDDING_ENDPOINT=https://your.openai.azure.com/openai/deployments/text-embedding-3-small/embeddings?api-version=2023-05-15
AZURE_OPENAI_EMBEDDINGS_DEPLOYMENT=text-embedding-3-small
# Azure Cognitive Search
AZURE_SEARCH_INDEX=yourkey-index
AZURE_SEARCH_API_KEY=yourkey-aisearch
AZURE_SEARCH_ENDPOINT=https://your.search.windows.net
 
# Azure Config
NEXT_PUBLIC_AZURE_CLIENT_ID="ID"
NEXT_PUBLIC_AZURE_TENANT_ID="ID"
NEXT_PUBLIC_APP_URL=http://localhost:3000
 
# CosmosDB
NEXT_PUBLIC_COSMOSDB_ENDPOINT="https://your.documents.azure.com:443/"
NEXT_PUBLIC_COSMOSDB_PRIMARY_KEY="yourkey-cosmosDB"
NEXT_PUBLIC_COSMOSDB_DATABASE="fiocruz-documents"
NEXT_PUBLIC_COSMOSDB_CONTAINER_PREFIX="fiocruz-docs"
 
# Application Config
NEXT_PUBLIC_APP_LANG="pt-br"
NEXT_PUBLIC_APP_COMPLIANCE="true"
NEXT_PUBLIC_APP_NAME="Assistente de Documentos Fiocruz"
NEXT_PUBLIC_APP_DESCRIPTION="Sistema de consulta inteligente de documentos institucionais da Fiocruz"
 
AZURE_RERANK_API_KEY=yourkey-rerank
AZURE_RERANK_URL=https://your-cohere-rerank-v3-5.eastus.models.ai.azure.com/v1/rerank
AZURE_RERANK_MODEL=Cohere-rerank-v3.5
```

## 🏗️ Arquitetura do Sistema

### **Estrutura de Dados**
```
📁 interface/models/
├── baseModel.ts          # Interface base para todos os modelos
├── conversationModels.ts # Modelos de chat/conversa
├── messageModels.ts      # Modelos de mensagens
├── citationModels.ts     # Modelos de citações
└── feedbackModels.ts     # Modelos de feedback

📁 lib/rag/
├── controllers/          # Controllers para operações CRUD
├── services/             # Serviços de negócio
├── cosmos/               # Integração com Cosmos DB
├── types/                # Definições de tipos
└── utils/                # Utilitários

📁 app/api/
├── chat/                 # API de chat
├── conversations/        # API de conversas
└── feedback/             # API de feedback

📁 components/
├── chat-interface.tsx    # Interface principal do chat
├── chat-message.tsx      # Componente de mensagem
├── references-panel.tsx  # Painel de referências
└── ui/                   # Componentes de UI
```

### **Fluxo de Dados**
1. **Usuário** envia mensagem via interface
2. **API** processa a mensagem e busca documentos relevantes
3. **Azure AI Search** retorna documentos similares
4. **Cohere** reranking dos resultados
5. **Azure OpenAI** gera resposta baseada no contexto
6. **Cosmos DB** armazena conversa, mensagens e citações
7. **Frontend** exibe resposta com referências

## ⚠️ Observações Importantes

### **Segurança**
- ⚠️ **NUNCA** commite arquivos `.env.local` ou `.env`
- 🔐 Mantenha as chaves de API seguras
- 🛡️ Configure CORS adequadamente para produção
- 🔒 Use HTTPS em produção

### **Performance**
- 📊 O sistema implementa cache de conversas
- ⚡ Reranking otimizado para melhor relevância
- 🎯 Busca semântica com threshold configurável
- 💾 Estrutura normalizada para consultas eficientes

### **Atenção**
- 📄 Suporte atual: PDF, documentos de texto
- 🔍 Índice de busca deve ser pré-configurado
- 💰 Custos de API do Azure OpenAI e Cohere
- 🌐 Requer conexão com serviços Azure

### **Configurações de Produção**
- 🚀 Configure `NODE_ENV=production`
- 🔧 Ajuste `LOG_LEVEL` conforme necessário
- 📈 Monitore uso de tokens e custos
- 🛠️ Configure CI/CD adequadamente

### **Troubleshooting**
- 🔍 Verifique logs do console para erros
- 🔧 Confirme configuração das variáveis de ambiente
- 📊 Monitore status dos serviços Azure
- 🐛 Use ferramentas de debug do Next.js

## 📚 Documentação Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [Azure AI Search](https://docs.microsoft.com/en-us/azure/search/)
- [Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/)
- [LangChain](https://python.langchain.com/docs/get_started/introduction)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ para facilitar o acesso inteligente aos documentos institucionais da Fiocruz**
