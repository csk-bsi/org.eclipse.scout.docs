/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {dates, Form, models} from '@eclipse-scout/core';
import DateFieldFormModel from './DateFieldFormModel';

export default class DateFieldForm extends Form {

  constructor() {
    super();
  }

  _jsonModel() {
    return models.get(DateFieldFormModel);
  }

  // noinspection DuplicatedCode
  _init(model) {
    super._init(model);

    let dateField = this.widget('DateField');
    let hasTimeField = this.widget('HasTimeField');
    hasTimeField.setValue(dateField.hasTime);
    hasTimeField.on('propertyChange', this._onHasTimePropertyChange.bind(this));

    let hasDateField = this.widget('HasDateField');
    hasDateField.setValue(dateField.hasDate);
    hasDateField.on('propertyChange', this._onHasDatePropertyChange.bind(this));

    let dateFormatField = this.widget('DateFormatField');
    dateFormatField.setValue(dateField.dateFormatPattern);
    dateFormatField.on('propertyChange', this._onDateFormatPropertyChange.bind(this));

    let timeFormatField = this.widget('TimeFormatField');
    timeFormatField.setValue(dateField.timeFormatPattern);
    timeFormatField.on('propertyChange', this._onTimeFormatPropertyChange.bind(this));

    let timePickerResolutionField = this.widget('TimePickerResolutionField');
    timePickerResolutionField.setValue(dateField.timePickerResolution);
    timePickerResolutionField.on('propertyChange', this._onTimePickerResolutionPropertyChange.bind(this));

    let autoDateField = this.widget('AutoDateField');
    autoDateField.setValue(dateField.autoDate);
    autoDateField.on('propertyChange', this._onAutoDatePropertyChange.bind(this));

    let dontAllowCurrentDateField = this.widget('DontAllowCurrentDateField');
    this._dontAllowCurrentDateValidator = value => {
      if (dates.isSameDay(value, new Date())) {
        throw 'You are not allowed to select the current date';
      }
      return value;
    };
    dontAllowCurrentDateField.on('propertyChange', this._onDontAllowCurrentDateField.bind(this));

    this.widget('ValueFieldPropertiesBox').setField(dateField);
    this.widget('FormFieldPropertiesBox').setField(dateField);
    this.widget('GridDataBox').setField(dateField);
    this.widget('WidgetActionsBox').setField(dateField);
    this.widget('FormFieldActionsBox').setField(dateField);
    this.widget('EventsTab').setField(dateField);
  }

  _onHasDatePropertyChange(event) {
    if (event.propertyName === 'value') {
      this.widget('DateField').setHasDate(event.newValue);
    }
  }

  _onHasTimePropertyChange(event) {
    if (event.propertyName === 'value') {
      this.widget('DateField').setHasTime(event.newValue);
    }
  }

  _onDateFormatPropertyChange(event) {
    if (event.propertyName === 'value') {
      this.widget('DateField').setDateFormatPattern(event.newValue);
    }
  }

  _onTimeFormatPropertyChange(event) {
    if (event.propertyName === 'value') {
      this.widget('DateField').setTimeFormatPattern(event.newValue);
    }
  }

  _onTimePickerResolutionPropertyChange(event) {
    if (event.propertyName === 'value') {
      this.widget('DateField').setTimePickerResolution(event.newValue);
    }
  }

  _onAutoDatePropertyChange(event) {
    if (event.propertyName === 'value') {
      this.widget('DateField').setAutoDate(event.newValue);
    }
  }

  _onDontAllowCurrentDateField(event) {
    if (event.propertyName === 'value') {
      let dateField = this.widget('DateField');
      if (event.newValue) {
        dateField.addValidator(this._dontAllowCurrentDateValidator);
      } else {
        dateField.removeValidator(this._dontAllowCurrentDateValidator);
      }
    }
  }
}
