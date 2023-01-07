// test utils から mount() メソッドをインポート
// テストするコンポーネント
import { mount } from '@vue/test-utils';
import counter from '@/atom/counter';


describe('Counterメソッドのテスト', () => {
  // コンポーネントがマウントされ、ラッパが作成されます。
  const wrapper = mount(counter);

  // // wrapper.vmを 介して実際の Vue インスタンスにアクセス
  // const vm = wrapper.vm
  // console.log(wrapper.html())

  it('正しくHTMLが初期状態でレンダリングされているかのテスト', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
    //expect(wrapper.html()).toContain('<button @click="increment">Increment</button>')
  })

  it('ボタンの存在テスト', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('初期状態でカウントが0であることの確認テスト', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it('ボタンがクリック時にカウントアップされること', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
  
})