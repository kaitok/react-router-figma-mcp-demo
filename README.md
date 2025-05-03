# React Router + Figma MCP Demo

## Stack
- React Router(v7)
- Figma MCP
- MUI
- Vitest
- Inversify(DI)
- Example of using some DDD principles in the backend

### Figma MCP Setup

Add settings.json and Run Figma MCP server
```
  "mcp": {
    "inputs": [],
    "servers": {
      "figma-developer-mcp": {
        "command": "npx",
        "args": [
          "-y",
          "figma-developer-mcp",
          "--figma-api-key=your_api_key",
          "--stdio"
        ]
      }
    }
  }
```


### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Testing

```bash
npm run test
```
