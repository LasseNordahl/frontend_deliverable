import React, { Component } from 'react';
import anime from 'animejs';
import './App.css';

import FeedbackForm from './components/FeedbackForm';

class App extends Component {
  constructor(props) {
    super(props)

    let left = this.createAnimationArray(20);
    let right = this.createAnimationArray(20);
    let all = left.concat(right);

    this.state = {
      animationReferencesLeft: left,
      animationReferencesRight: right,
      allReferences: all
    }
    // setInterval(() => {this.animateObjects()}, 2500);
    this.animateObjects = this.animateObjects.bind(this);
  }

  componentDidMount() {
    let leftTargets = this.state.animationReferencesLeft.map((ref) => ref.current);
    let rightTargets = this.state.animationReferencesRight.map((ref) => ref.current);
    let allTargets = this.state.allReferences.map((ref) => ref.current);

    this.setState({
      leftTargets: leftTargets,
      rightTargets: rightTargets,
      allTargets: allTargets
    }, () => {
      this.animateObjects();
    })
  }

  animateObjects() {
    var numberOfElements = 40;
    var duration = 4000;
    var delay = duration / numberOfElements;


    var timeline = anime.timeline({
      duration: delay,
      complete: function() {
        timeline.restart();
      }
    })

    for (let i = 0; i < this.state.allTargets.length; i++) {
      let target = this.state.allTargets[i]
      timeline.add({
        begin: function() {
          anime({
            targets: target,
            translateY: [-30, 30],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: duration * .5
          });
        }
      });
    }
  }

  createAnimationArray(range) {
    let animationReferences = [];
    for (let i = 0; i < range; i++) {
      animationReferences.push(React.createRef())
    }
    return animationReferences;
  }

  renderAnimatedObject(reference, key) {
    return (<div className="animatedObject" ref={reference} key={key}></div>)
  }

  render() {
    const { animationReferencesLeft, animationReferencesRight } = this.state;

    return (
      <div className="App application centerRowFlex">
        {animationReferencesLeft.map((ref, i) => {
          return this.renderAnimatedObject(ref, i);
        })}
        <FeedbackForm></FeedbackForm>
        {animationReferencesRight.map((ref, i) => {
          return this.renderAnimatedObject(ref, i);
        })}
      </div>
    );
  }
}

export default App;
