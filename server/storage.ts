// Storage interface no longer needed - using Web3Forms for contact form
// This file is kept for future extensibility if backend storage becomes needed

export interface IStorage {
  // Interface preserved for future use
}

export class MemStorage implements IStorage {
  constructor() {
    // No storage needed currently
  }
}

export const storage = new MemStorage();