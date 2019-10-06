import React from 'react';

const Landing = () => (
    <div>
        <h1>Landing Page for Hyproid - Chatbot</h1>



        There is a attribute available for auto focusing autoFocus, we can use that for auto focusing of input element instead of using ref.

        Using autoFocus with input element:

        <input />

        We can also use ref, but with ref we need to call focus method at correct place, you are calling that in componentWillUpdate lifecycle method, that method will not triggered during initial rendering, Instead of that use componentDidMount lifecycle method:

        <br /><br />

        exactly! I just realised it. It started working componentDidMount. Why cant we focus in componentWillUpdate? one is before the rendering is done and the other post it, and this is triggerd for a state change. @mayank is this because the parent component was in display: none mode while the rendering is taking place? So that means if we display: none an input HTML tag, and then focus it programmatically and after it, display it(display: block), focus wont work. Am I thinking in the right manner?

        There is a attribute available for auto focusing autoFocus, we can use that for auto focusing of input element instead of using ref.

        Using autoFocus with input element:


        We can also use ref, but with ref we need to call focus method at correct place, you are calling that in componentWillUpdate lifecycle method, that method will not triggered during initial rendering, Instead of that use componentDidMount lifecycle method:

        <br /><br />

        exactly! I just realised it. It started working componentDidMount. Why cant we focus in componentWillUpdate? one is before the rendering is done and the other post it, and this is triggerd for a state change. @mayank is this because the parent component was in display: none mode while the rendering is taking place? So that means if we display: none an input HTML tag, and then focus it programmatically and after it, display it(display: block), focus wont work. Am I thinking in the right manner?

        There is a attribute available for auto focusing autoFocus, we can use that for auto focusing of input element instead of using ref.

        Using autoFocus with input element:

        <input />

        We can also use ref, but with ref we need to call focus method at correct place, you are calling that in componentWillUpdate lifecycle method, that method will not triggered during initial rendering, Instead of that use componentDidMount lifecycle method:

        <br /><br />

        exactly! I just realised it. It started working componentDidMount. Why cant we focus in componentWillUpdate? one is before the rendering is done and the other post it, and this is triggerd for a state change. @mayank is this because the parent component was in display: none mode while the rendering is taking place? So that means if we display: none an input HTML tag, and then focus it programmatically and after it, display it(display: block), focus wont work. Am I thinking in the rightThere is a attribute available for auto focusing autoFocus, we can use that for auto focusing of input element instead of using ref.

        Using autoFocus with input element:


        We can also use ref, but with ref we need to call focus method at correct place, you are calling that in componentWillUpdate lifecycle method, that method will not triggered during initial rendering, Instead of that use componentDidMount lifecycle method:

        <br /><br />

        exactly! I just realised it. It started working componentDidMount. Why cant we focus in componentWillUpdate? one is before the rendering is done and the other post it, and this is triggerd for a state change. @mayank is this because the parent component was in display: none mode while the rendering is taking place? So that means if we display: none an input HTML tag, and then focus it programmatically and after it, display it(display: block), focus wont work. Am I thinking in the right work.



    </div>
)

export default Landing;
