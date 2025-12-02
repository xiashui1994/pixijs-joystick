import * as PIXI from 'pixi.js'
import { Joystick } from '../lib/main'

const joystickPng = new URL('./joystick.png', import.meta.url).href
const joystickHandlePng = new URL('./joystick-handle.png', import.meta.url).href

async function initialize() {
  await PIXI.Assets.load([
    { alias: 'outer', src: joystickPng },
    { alias: 'inner', src: joystickHandlePng },
  ])

  const app = new PIXI.Application()
  await app.init({
    canvas: document.getElementById('canvas') as HTMLCanvasElement,
    background: 0xFFFFFF,
    resizeTo: window,
  })

  const leftText = new PIXI.Text({ text: '[left data]' })
  const rightText = new PIXI.Text({ text: '[right data]' })
  const leftJoystick = new Joystick({
    outer: PIXI.Sprite.from('outer'),
    inner: PIXI.Sprite.from('inner'),
    outerScale: { x: 0.5, y: 0.5 },
    innerScale: { x: 0.8, y: 0.8 },
    onChange: (data) => { leftText.text = JSON.stringify(data) },
    onStart: () => console.log('start'),
    onEnd: () => console.log('end'),
  })
  app.stage.addChild(leftJoystick)

  const rightJoystick = new Joystick({
    onChange: (data) => { rightText.text = JSON.stringify(data) },
    onStart: () => console.log('start'),
    onEnd: () => console.log('end'),
  })
  app.stage.addChild(rightJoystick)

  leftText.position.set(0, 0)
  rightText.position.set(0, 50)
  app.stage.addChild(leftText)
  app.stage.addChild(rightText)

  const resize = () => {
    leftJoystick.position.set(leftJoystick.width, window.innerHeight - leftJoystick.height)
    rightJoystick.position.set(window.innerWidth - rightJoystick.width, window.innerHeight - rightJoystick.height)
    app.renderer.resize(window.innerWidth, window.innerHeight)
    app.resize()
  }
  resize()
  window.addEventListener('resize', resize)

  // app.start() // Not needed usually if ticker is auto started, but can keep if needed. v8 starts automatically.
}

initialize()
