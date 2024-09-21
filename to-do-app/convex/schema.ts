// Setup convex with:
// npm i -s convex
// npx convex dev

import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    todos: defineTable({
        title: v.string(),
        description: v.string(),
        completed: v.boolean()
    }), 
});

