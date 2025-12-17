# PixiJS Joystick

A virtual joystick component based on PixiJS v7+, supporting both touch and mouse interactions.

## Features

- 🎮 Touch and mouse event support
- 📐 8-directional detection (up, down, left, right, and four diagonal directions)
- 💪 Real-time angle and power feedback
- 🎨 Customizable appearance (supports sprites or graphics)
- 📦 Compatible with PixiJS v7.4.3+
- 🔧 TypeScript support

## Installation

```bash
npm install
```

## Usage

### Basic Example

```typescript
import * as PIXI from 'pixi.js'
import { Joystick } from './lib/main'

const app = new PIXI.Application({
  view: document.getElementById('canvas') as HTMLCanvasElement,
  backgroundColor: 0xFFFFFF,
  resizeTo: window,
})

const joystick = new Joystick({
  onChange: (data) => {
    console.log('Angle:', data.angle)
    console.log('Direction:', data.direction)
    console.log('Power:', data.power)
  },
  onStart: () => console.log('Drag started'),
  onEnd: () => console.log('Drag ended'),
})

app.stage.addChild(joystick)
```

### Custom Appearance

```typescript
const joystick = new Joystick({
  outer: PIXI.Sprite.from('outer.png'),
  inner: PIXI.Sprite.from('inner.png'),
  outerScale: { x: 0.5, y: 0.5 },
  innerScale: { x: 0.8, y: 0.8 },
  onChange: (data) => {
    // Handle joystick changes
  },
})
```

## API

### JoystickSettings

| Parameter | Type | Description |
|-----------|------|-------------|
| `outer` | `PIXI.Sprite \| PIXI.Graphics \| PIXI.Container` | Outer display object (optional, defaults to black circle) |
| `inner` | `PIXI.Sprite \| PIXI.Graphics \| PIXI.Container` | Inner display object (optional, defaults to black circle) |
| `outerScale` | `{ x: number, y: number }` | Outer scale ratio (optional, defaults to 1) |
| `innerScale` | `{ x: number, y: number }` | Inner scale ratio (optional, defaults to 1) |
| `onChange` | `(data: JoystickChangeEvent) => void` | Callback function when joystick moves |
| `onStart` | `() => void` | Callback function when drag starts |
| `onEnd` | `() => void` | Callback function when drag ends |

### JoystickChangeEvent

| Property | Type | Description |
|----------|------|-------------|
| `angle` | `number` | Joystick angle (0-360 degrees) |
| `direction` | `Direction` | Joystick direction enum |
| `power` | `number` | Joystick power (0-1) |

### Direction Enum

- `LEFT` - Left
- `RIGHT` - Right
- `TOP` - Top
- `BOTTOM` - Bottom
- `TOP_LEFT` - Top-left
- `TOP_RIGHT` - Top-right
- `BOTTOM_LEFT` - Bottom-left
- `BOTTOM_RIGHT` - Bottom-right

## Development

```bash
# Start development server
npm run dev

# Build
npm run build

# Lint
npm run lint

# Auto-fix code style
npm run lint:fix
```

## License

MIT © xiashui
