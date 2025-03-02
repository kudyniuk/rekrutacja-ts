# Rekrutacja TS

Start app: 
`npm run dev`

### API
```typescript
type Post = {
  id: number
  title: string
  content: string
  author: string
  date: string // iso format
}

// GET: /api/posts -> Post[]
// POST: /api/posts -> Post
// DELETE: /api/posts/:id
```