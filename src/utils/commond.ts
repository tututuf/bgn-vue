import { debounce } from './debounce'
import router from '@/router'
export interface PageJumperOptionsInter {
  scrollEl: HTMLElement | null
  id?: number,
  jumpCallback?: (id: number) => void
}
export class PageJumper {
  constructor(options: PageJumperOptionsInter) {
    this.options = options
    this.scrollEl = options.scrollEl
    this.id = options.id
    this.curId = this.id
    this.jumpCallback = options.jumpCallback
    this.mainContentScrollListener()
    this.heightArr = []
    const children = this.scrollEl?.querySelectorAll('.page')
    if (!children) return
    for (let index: number = 0; index < children.length; index++) {
      const child = children[index] as HTMLElement
      this.heightArr.push(child?.offsetTop)
    }
  }
  children: any
  options: PageJumperOptionsInter
  scrollEl: HTMLElement | null
  jumpCallback: ((id: number) => void) | undefined
  id: number | undefined
  curId: number | undefined
  heightArr: Array<number>
  mainContentScrollListener() {
    const _self = this
    const wheelEvent = debounce(wheelHandler, 200)
    function wheelHandler(e: WheelEvent) {
      // console.log(_self.id);
      if (_self.id !== undefined) {
        if (e.deltaY > 0) {
          console.log(_self.id);

          _self.routerTo(_self.id + 1)
        } else {
          _self.routerTo(_self.id - 1)
        }
      } else {
        _self.jumpTo()
      }
    }
    this.scrollEl?.addEventListener('wheel', wheelEvent)
  }
  jumpTo() {
    if (!this.scrollEl) return
    const scrollTop = this.scrollEl.scrollTop
    const absArr = this.heightArr.map(item => Math.abs(scrollTop - item))
    const minItem = Math.min(...absArr)
    const index = absArr.findIndex(item => item == minItem)
    this.scrollEl.scrollTo({ top: this.heightArr[index], behavior: 'smooth' })
  }
  routerTo(id: number) {
    if (!this.scrollEl) return
    const children = this.children
    console.log(id);

    if (id < 0) {
      id = 0
    }
    if (id > children.length - 1) {
      id = children.length - 1
    }
    const child = children[id] as HTMLElement
    this.scrollEl.scrollTo({ top: child.offsetTop, behavior: 'smooth' })
    router.push({ params: { id } })
    console.log(1231);
    if (this.jumpCallback) {
      this.jumpCallback(id)
    }
    if (this.id != undefined) {
      this.id = id
    }
  }
}