import {Component} from 'react'

import {
  Heading,
  LabelElement,
  InputElement,
  Button,
  MemeContainer,
  FormContainer,
  SelectContainer,
  OptionElement,
  DisplayContainer,
  TextElement,
  MemeTextContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topContent: '',
    bottomContent: '',
    activeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    textTop: '',
    textBottom: '',
    activeFontSize: '',
  }

  onChangeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topContent: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomContent: event.target.value})
  }

  onSubmitStatus = event => {
    event.preventDefault()

    const {imgUrl, topContent, bottomContent, activeOptionId} = this.state

    this.setState({
      textTop: topContent,
      textBottom: bottomContent,
      backgroundImageUrl: imgUrl,
      activeFontSize: activeOptionId,
    })
  }

  onChangeOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  renderContainer = () => {
    const {textTop, textBottom, backgroundImageUrl, activeFontSize} = this.state
    return (
      <>
        <DisplayContainer
          backgroundImage={backgroundImageUrl}
          data-testid="meme"
        >
          <TextElement activeFontSizeId={activeFontSize} outline>
            {textTop}
          </TextElement>
          <TextElement activeFontSizeId={activeFontSize}>
            {textBottom}
          </TextElement>
        </DisplayContainer>
      </>
    )
  }

  render() {
    const {topContent, bottomContent, imgUrl, activeOptionId} = this.state
    return (
      <MemeContainer>
        <Heading>Meme Generator</Heading>
        <MemeTextContainer>
          {this.renderContainer()}
          <FormContainer onSubmit={this.onSubmitStatus}>
            <LabelElement htmlFor="inputImg">Image URL</LabelElement>
            <InputElement
              type="text"
              id="inputImg"
              placeholder="Enter the image url"
              onChange={this.onChangeUrl}
              value={imgUrl}
            />
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              type="text"
              id="topText"
              placeholder="Enter the top text"
              onChange={this.onChangeTopText}
              value={topContent}
            />
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              type="text"
              id="bottomText"
              placeholder="Enter the bottom text"
              value={bottomContent}
              onChange={this.onChangeBottomText}
            />
            <LabelElement htmlFor="select">Font Size</LabelElement>
            <SelectContainer
              onChange={this.onChangeOption}
              value={activeOptionId}
              id="select"
            >
              {fontSizesOptionsList.map(each => (
                <OptionElement key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </OptionElement>
              ))}
            </SelectContainer>
            <Button type="submit">Generate</Button>
          </FormContainer>
        </MemeTextContainer>
      </MemeContainer>
    )
  }
}

export default MemeGenerator
