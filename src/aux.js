import React, { Component } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 3,
      interval: null,
    };
  }

  componentDidMount() {
    this.createInterval();
  }

  componentDidUpdate() {
    const { timerRunning } = this.props;
    const { seconds, interval } = this.state;
    if (seconds < 1) {
      clearInterval(interval);
    }
  }

  createInterval = () => {
    this.setState({ seconds: 30 });
    console.log('component');
    const second = 1000;
    const interval = setInterval(() => {
      this.setState((prev) => ({ seconds: prev.seconds - 1 }));
    }, second);
    this.setState({ interval });
  }

  render() {
    const { seconds } = this.state;
    return (
      <span>
        {seconds}
      </span>);
  }
}

const mapStateToProps = (state) => ({
  timerRunning: state.questions.timerRunning,
});

export default connect(mapStateToProps)(Timer);
/*
class Timer() {
  const time = 30;
  const [seconds, setSeconds] = useState(time);
  const { timerRunning } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(seconds);
    const second = 1000;
    const interval = setInterval(() => {
      const clear = () => {
        clearInterval(interval);
        dispatch(actionTimerRuning(false));
      };
      if (!timerRunning) {
        clear();
        return;
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (seconds === 1) {
          clear();
        }
        return;
      }
      clear();
    }, second);
    clearInterval(interval);
  });

  useEffect(() => {
    if (seconds === 0) {
      dispatch(actionDisabledAnswers(true));
    }
  }, [seconds, dispatch]);
  ;
} */
