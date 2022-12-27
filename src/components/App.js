import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Options/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  AllFeedback = e => {
    if (e === 'Good') {
      this.setState({
        good: this.state.good + 1,
      });
    }
    if (e === 'Neutral') {
      this.setState({
        neutral: this.state.neutral + 1,
      });
    }
    if (e === 'Bad') {
      this.setState({
        bad: this.state.bad + 1,
      });
    }
  };

  totalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positiveFeedback = () => {
    if (this.totalFeedback() === 0) {
      return 0;
    }
    const positive = (this.state.good / this.totalFeedback()) * 100;
    return Math.round(positive);
  };
  render() {
    return (
      <section>
        <Section title=" Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.AllFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.totalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </section>
    );
  }
}
