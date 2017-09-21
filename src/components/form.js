import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  MDCFormField,
  MDCFormFieldFoundation,
} from '@material/form-field';
import '@material/form-field/dist/mdc.form-field.min.css';

import {
  MDCCheckbox,
  MDCCheckboxFoundation,
} from '@material/checkbox';
import '@material/checkbox/dist/mdc.checkbox.min.css';

import {
  MDCSlider,
  MDCSliderFoundation,
} from '@material/slider';
import '@material/slider/dist/mdc.slider.min.css';

import {
  MDCRadio,
  MDCRadioFoundation,
} from '@material/radio';
import '@material/radio/dist/mdc.radio.min.css';

const CHECKBOX = 'mdc-checkbox';
const RADIO = 'mdc-radio';
const SLIDER = 'mdc-slider';
const FORM_FIELD = 'mdc-form-field';

export class Checkbox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    onChange: () => {}
  }

  componentDidMount() {
    this.checkbox_ = MDCCheckbox.attachTo(this.root_);
  }

  componentWillUnmount() {
    this.checkbox_.destroy();
  }

  get indeterminate() {
    return this.nativeInput_.indeterminate;
  }

  set indeterminate(value) {
    if(this.nativeInput_) {
      this.nativeInput_.indeterminate=value;
    }
  }

  render() {
    let {className, indeterminate, ...otherProps} = this.props;
    return (
      <div className={CHECKBOX} ref={ref => this.root_=ref}>
        <input type="checkbox" {...otherProps}
          ref={ref => {
            this.nativeInput_ = ref;
            this.indeterminate = indeterminate;
          }}
          className={classnames(`${CHECKBOX}__native-control`, className)} {...otherProps}/>

        <div className={`${CHECKBOX}__background`}>
          <svg version="1.1" className={`${CHECKBOX}__checkmark`} viewBox="0 0 24 24">
            <path className={`${CHECKBOX}__checkmark__path`} fill='none' stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div className={`${CHECKBOX}__mixedmark`} />
        </div>
      </div>
    );
  }
}

export class Radio extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => {}
  }

  componentDidMount() {
    this.radio_ = MDCRadio.attachTo(this.root_);
  }

  componentWillUnmount() {
    this.radio_.destroy();
  }

  render() {
    let {className, indeterminate, ...otherProps} = this.props;
    return (
      <div className={RADIO}
        ref={ref => this.root_=ref}>
        <input type="radio" ref={ref => this.nativeInput_=ref} {...otherProps}
          className={classnames(`${RADIO}__native-control`, className)}/>

        <div className={`${RADIO}__background`}>
          <div className={`${RADIO}__outer-circle`}></div>
          <div className={`${RADIO}__inner-circle`}></div>
        </div>
      </div>
    );
  }
}

export class Slider extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    discrete: PropTypes.bool,
    displayMarkers: PropTypes.bool,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
  }

  static defaultProps = {
    discrete: true,
    displayMarkers: true,
    maxValue: 100,
    minValue: 0,
    value: 10,
    step: 1,
    onChange: e => {},
    onInput: e => {},
  }

  componentDidMount() {
    this.slider_ = MDCSlider.attachTo(this.root_);

    let {onChange, onInput} = this.props;
    this.slider_.listen(MDCSliderFoundation.strings.CHANGE_EVENT, onChange);
    this.slider_.listen(MDCSliderFoundation.strings.INPUT_EVENT, onInput);
  }

  componentDidUpdate() {
    this.slider_.initialize();
  }

  render() {
    let {className, children, discrete, displayMarkers, maxValue, minValue, value, step, ...otherProps} = this.props;
    return (
      <div role='slier' className={classnames(SLIDER, {
        [`${SLIDER}--discrete`]: discrete || displayMarkers,
        [`${SLIDER}--display-markers`]: displayMarkers,
      }, className)}
      aria-valuemax={maxValue}
      aria-valuemin={minValue}
      aria-valuenow={value}
      data-step={step}
      ref={ref => this.root_=ref}>
        <div className={`${SLIDER}__track-container`}>
          <div className={`${SLIDER}__track`}></div>
          <div className={`${SLIDER}__track-marker-container`}></div>
        </div>
        <div className={`${SLIDER}__thumb-container`}>
          <div className={`${SLIDER}__pin`}>
            <span className={`${SLIDER}__pin-value-marker`}>{value}</span>
          </div>

          <svg className={`${SLIDER}__thumb`} width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
          <div className={`${SLIDER}__focus-ring`}></div>
        </div>
      </div>
    );
  }
}

export class FormField extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    alignEnd: PropTypes.bool,
  }

  static defaultProps = {
    alignEnd: false,
  }

  componentDidMount() {
    this.field_ = MDCFormField.attachTo(this.root_);
  }

  render() {
    let {className, children, alignEnd, ...otherProps} = this.props;
    return (
      <div className={classnames(FORM_FIELD, {
        [`${FORM_FIELD}--align-end`]: alignEnd,
      }, className)} {...otherProps} ref={ref => this.root_=ref}>
        {children}
      </div>
    );
  }
}
