import { shallow } from 'vue-test-utils'

import UpVoteDownVote from '~components/flex/UpVoteDownVote'

const wrapperDefault = shallow(UpVoteDownVote)
const wrapperPostive = shallow(UpVoteDownVote, { propsData: { score: 1 }})
const wrapperNegative = shallow(UpVoteDownVote, { propsData: { score: -1 }})

describe('UpVoteDownVote', () => {  
  describe('order correcting', () => {
    it('first should be up', () => {
      expect(wrapperDefault.find('v-icon').element.innerHTML).toBe('arrow_upward')
    })
    it('second should be down', () => {
      expect(wrapperDefault.find('v-icon~v-icon').element.innerHTML).toBe('arrow_downward')
    })
  })

  describe('score = 0', () => {
    it('up shouldn\'t color', () => {
      expect(wrapperDefault.find('v-icon').element.getAttribute('color')).toBe('')
    })
    it('down shouldn\'t color', () => {
      expect(wrapperDefault.find('v-icon~v-icon').element.getAttribute('color')).toBe('')
    })
  })

  describe('score > 0', () => {
    it('up should color', () => {
      expect(wrapperPostive.find('v-icon').element.getAttribute('color')).not.toBe('')
    })
    it('down shouldn\'t color', () => {
      expect(wrapperPostive.find('v-icon~v-icon').element.getAttribute('color')).toBe('')
    })
  })

  describe('score < 0', () => {
    it('up shouldn\'t color', () => {
      expect(wrapperNegative.find('v-icon').element.getAttribute('color')).toBe('')
    })
    it('down should color', () => {
      expect(wrapperNegative.find('v-icon~v-icon').element.getAttribute('color')).not.toBe('')
    })
  })
})
