// Knowledge 파일 정보
export interface KnowledgeFile {
  fileName: string;
  fileId: string;
}

// Child Assistant 정보
export interface ChildAssistant {
  id: string;
  name: string;
}

// DataLake Vector Store 정보
export interface DataLakeVectorStore {
  id: string;
  name: string;
}

// GPT Version 정보
export interface GptVersion {
  id: string;
  name: string;
}

// MyAI 전체 타입
export interface MyAI {
  id: string;
  profileImage: string | null;
  name: string;
  description: string;
  instructions: string;
  conversationStarters: string[] | null;
  knowledge: KnowledgeFile[] | null;
  capabilities: string[] | null;
  createdDate: string;
  updatedDate: string | null;
  AIType: string | null;
  category: string | null;
  categoryId: string | null;
  childAssistants: ChildAssistant[] | null;
  gptVersion: string | null;
  gptVersions: GptVersion[] | null;
  dataLakeVectorStores: DataLakeVectorStore[] | null;
  isSidebar: boolean;
  isFavorite: boolean;
  isPinned: boolean;
  isPublic: boolean;
}

// API 응답 타입
export interface MyAIListResponse {
  totalCount: number;
  rows: MyAI[];
}
