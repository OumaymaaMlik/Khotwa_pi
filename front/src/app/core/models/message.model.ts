export type MessageStatus = 'PENDING' | 'READ' | 'RESOLVED' | 'ARCHIVED';
export type MessageType = 'DIRECT_MESSAGE' | 'SUPPORT_TICKET';
export type ConversationType = 'DIRECT' | 'GROUP';

export interface ConversationParticipant {
  userId: number;
  fullName: string;
  avatar?: string | null;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
  online: boolean;
}

export interface Conversation {
  id: number;
  type: ConversationType;
  title: string;
  projectId?: number | null;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
  onlineCount: number;
  totalParticipants: number;
  unreadCount: number;
  lastMessage?: Message | null;
  participants: ConversationParticipant[];
}

export interface Message {
  id: number;
  conversationId?: number;
  subject: string;
  body: string;
  senderId: number;
  receiverId: number;
  senderName: string;
  receiverName: string;
  type: MessageType;
  status: MessageStatus;
  createdAt: Date;
  updatedAt: Date;
  fileUrl?: string;
  deletedForAll?: boolean;
  deletedForUsers?: string;
  parentMessageId?: number;
  parentMessageContent?: string;
  readBy?: string[];
}

export interface Notification {
  id: number;
  recipientId: number;
  senderId?: number;
  conversationId?: number | null;
  message: string;
  type: 'NEW_MESSAGE' | 'STATUS_UPDATED' | 'TICKET_RESOLVED' | 'FEEDBACK_SUBMITTED' | 'PROJECT_ASSIGNMENT' | 'PROJECT_UNASSIGNED';
  createdAt: Date;
  read: boolean;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  last: boolean;
  first: boolean;
}