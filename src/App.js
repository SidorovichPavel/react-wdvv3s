import React from 'react';
import './style.css';

// Задание
// Допишите код так, чтобы DatePicker был контролируемым компонентом.
// При выборе даты в input'е, текст на ним должен обновляться и показывать выбранную дату
// При нажатии на кнопку Reset date, input должен очищаться, а надпись становаиться 'Select date'
// Документация по JQuery UI
// https://jqueryui.com/datepicker
// https://api.jqueryui.com/datepicker

class DatePicker extends React.Component {
  inputRef = null;

  state = {
    date: '1/4/2023',
  };

  componentDidMount() {
    $(this.inputRef).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: (d) => {
        this.setState({ date: d });
      },
    });
    $(this.inputRef).datepicker('setDate', this.props.value || '');
  }

  render() {
    return (
      <>
        <div>
          {this.state.date ? `Date: ${this.state.date}` : 'Select date'}{' '}
        </div>
        <div>
          <input
            ref={(domElement) => {
              this.inputRef = domElement;
            }}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              this.inputRef.value = 'Select date'
            }}
          >
            Reset date
          </button>
        </div>
      </>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <DatePicker />
        </div>
      </React.Fragment>
    );
  }
}
