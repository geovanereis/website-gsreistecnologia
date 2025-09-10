import { type User, type InsertUser, type QuoteRequest, type InsertQuoteRequest, type SmsMessage, type InsertSmsMessage } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
  createSmsMessage(sms: InsertSmsMessage): Promise<SmsMessage>;
  getSmsMessages(): Promise<SmsMessage[]>;
  getSmsMessage(id: string): Promise<SmsMessage | undefined>;
  updateSmsMessage(id: string, updates: Partial<Pick<SmsMessage, 'status' | 'messageSid'>>): Promise<SmsMessage | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private quoteRequests: Map<string, QuoteRequest>;
  private smsMessages: Map<string, SmsMessage>;

  constructor() {
    this.users = new Map();
    this.quoteRequests = new Map();
    this.smsMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createQuoteRequest(insertRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const createdAt = new Date();
    const request: QuoteRequest = { 
      ...insertRequest, 
      id, 
      createdAt 
    };
    this.quoteRequests.set(id, request);
    return request;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }

  async createSmsMessage(insertSms: InsertSmsMessage): Promise<SmsMessage> {
    const id = randomUUID();
    const sentAt = new Date();
    const sms: SmsMessage = { 
      ...insertSms, 
      id, 
      status: "pending",
      messageSid: null,
      sentAt 
    };
    this.smsMessages.set(id, sms);
    return sms;
  }

  async getSmsMessages(): Promise<SmsMessage[]> {
    return Array.from(this.smsMessages.values())
      .sort((a, b) => b.sentAt.getTime() - a.sentAt.getTime());
  }

  async getSmsMessage(id: string): Promise<SmsMessage | undefined> {
    return this.smsMessages.get(id);
  }

  async updateSmsMessage(id: string, updates: Partial<Pick<SmsMessage, 'status' | 'messageSid'>>): Promise<SmsMessage | undefined> {
    const sms = this.smsMessages.get(id);
    if (!sms) return undefined;
    
    const updatedSms = { ...sms, ...updates };
    this.smsMessages.set(id, updatedSms);
    return updatedSms;
  }
}

export const storage = new MemStorage();
