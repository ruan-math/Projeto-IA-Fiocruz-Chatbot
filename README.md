# 🏥 IA-Fiocruz-Chatbot: Assistente Inteligente de Documentos

O **IA-Fiocruz-Chatbot** é uma solução avançada de inteligência artificial baseada na arquitetura **RAG (Retrieval-Augmented Generation)**. Desenvolvido para a **Fiocruz**, o sistema permite a consulta interativa e precisa a documentos institucionais, utilizando modelos de linguagem de última geração integrados a uma infraestrutura robusta na nuvem.

---

## 🚀 Visão Geral do Projeto

O sistema resolve o desafio de acessar rapidamente informações em grandes volumes de documentos técnicos e institucionais. Ao combinar busca semântica, processamento de linguagem natural e uma interface intuitiva, o chatbot fornece respostas fundamentadas, citando diretamente as fontes consultadas.

### 🌟 Diferenciais Estratégicos
- **Precisão Institucional**: Respostas baseadas exclusivamente na base de conhecimento da Fiocruz.
- **Transparência**: Sistema de citações em tempo real que vincula cada afirmação ao documento de origem.
- **Escalabilidade**: Arquitetura preparada para lidar com milhares de documentos e usuários simultâneos.
- **Segurança Enterprise**: Integração nativa com Azure AD para controle de acesso e proteção de dados.

---

## 🛠️ Stack Tecnológica

O projeto utiliza o que há de mais moderno no ecossistema de desenvolvimento web e inteligência artificial:

### **Frontend & Interface**
- **Framework**: [Next.js 15.2.4](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS 4.1.9](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Componentes**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown) para renderização rica de respostas.

### **Inteligência Artificial & RAG**
- **Orquestração**: [LangChain 0.1.15](https://js.langchain.com/)
- **LLM**: [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service) (Modelos GPT-4o)
- **Embeddings**: Azure OpenAI (text-embedding-3-small)
- **Reranking**: [Cohere AI](https://cohere.com/) (v3.5) para máxima relevância nos resultados.

### **Infraestrutura & Backend**
- **Busca Vetorial**: [Azure AI Search](https://azure.microsoft.com/en-us/products/ai-services/ai-search)
- **Banco de Dados**: [Azure Cosmos DB](https://azure.microsoft.com/en-us/products/cosmos-db) (NoSQL)
- **Autenticação**: [Azure AD / MSAL](https://learn.microsoft.com/en-us/entra/msal/js/)
- **Runtime**: Node.js 18+

---

## 🏗️ Arquitetura do Sistema

O projeto segue uma estrutura modular e organizada, facilitando a manutenção e evolução:

| Diretório | Descrição |
| :--- | :--- |
| `app/api/` | Endpoints de backend (Chat, Conversas, Feedback, Debug). |
| `components/` | Componentes React reutilizáveis e interface do usuário. |
| `lib/rag/` | Núcleo da lógica RAG: controllers, serviços e integração com Azure. |
| `interface/models/` | Definições de interfaces e modelos de dados (TypeScript). |
| `hooks/` | Hooks customizados para autenticação, estado e UI. |
| `i18n/` | Suporte a internacionalização (PT-BR e EN-US). |

---

## ⚙️ Configuração e Instalação

### **Pré-requisitos**
- Node.js (v18 ou superior)
- Gerenciador de pacotes (npm, yarn ou pnpm)
- Recursos ativos na Azure (OpenAI, AI Search, Cosmos DB, Entra ID)

### **Passo a Passo**

1. **Clonagem e Dependências**:
   ```bash
   git clone <url-do-repositorio>
   cd IA-Fiocruz-Chatbot
   npm install
   ```

2. **Variáveis de Ambiente**:
   Crie um arquivo `.env.local` baseado no `env.example` e preencha as chaves necessárias:
   - `AZURE_OPENAI_API_KEY`
   - `AZURE_SEARCH_API_KEY`
   - `NEXT_PUBLIC_COSMOSDB_PRIMARY_KEY`
   - `NEXT_PUBLIC_AZURE_CLIENT_ID`

3. **Execução**:
   ```bash
   # Modo Desenvolvimento
   npm run dev
   
   # Build de Produção
   npm run build
   npm start
   ```

---

## 📊 Fluxo de Funcionamento (RAG)

1. **Entrada**: O usuário faz uma pergunta na interface.
2. **Recuperação**: O sistema gera um embedding da pergunta e busca os trechos mais relevantes no **Azure AI Search**.
3. **Refinamento**: O **Cohere Rerank** reordena os trechos para garantir que os mais importantes estejam no topo.
4. **Geração**: O **Azure OpenAI** recebe a pergunta + os trechos recuperados e gera uma resposta contextualizada.
5. **Persistência**: A conversa e o feedback são salvos no **Cosmos DB** para histórico e melhoria contínua.

---

## 🔒 Segurança e Boas Práticas

- **Proteção de Dados**: Todas as chaves de API são gerenciadas via variáveis de ambiente no servidor.
- **Conformidade**: O sistema inclui avisos legais (disclaimers) e segue diretrizes de conformidade institucional.
- **Qualidade de Código**: Utilização de ESLint e TypeScript para garantir robustez e evitar erros em tempo de execução.

---

## 🤝 Contribuição e Suporte

Este projeto é uma iniciativa para modernizar o acesso à informação na Fiocruz. Para contribuições:
1. Abra uma **Issue** para discutir melhorias.
2. Envie um **Pull Request** com suas alterações.

---

**Desenvolvido para a Fiocruz – Ciência e Tecnologia a serviço da vida.**
