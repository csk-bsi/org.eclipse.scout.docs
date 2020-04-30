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
import {StaticLookupCall} from '@eclipse-scout/core';

export default class FormFieldLookupCall extends StaticLookupCall {

  constructor(compositeField) {
    super();
    this._compositeFieldPropertyChangeHandler = this._onCompositeFieldPropertyChange.bind(this);
    this._formFieldPropertyChangeHandler = this._onFormFieldPropertyChange.bind(this);
    this.data = [];
    this.setCompositeField(compositeField);
  }

  _data() {
    return this.data;
  }

  setCompositeField(compositeField) {
    if (this.compositeField) {
      this.compositeField.off('propertyChange', this._compositeFieldPropertyChangeHandler);
      this.compositeField.fields.forEach(function(formField) {
        formField.off('propertyChange', this._formFieldPropertyChangeHandler);
      }, this);
    }
    this.compositeField = compositeField;
    this.compositeField.on('propertyChange', this._compositeFieldPropertyChangeHandler);
    this.compositeField.fields.forEach(function(formField) {
      formField.on('propertyChange', this._formFieldPropertyChangeHandler);
    }, this);
    this._rebuildData();
  }

  _rebuildData() {
    this.data = this.compositeField.fields.map(formField => {
      return [formField, formField.label];
    });
  }

  _onCompositeFieldPropertyChange(event) {
    if (event.propertyName === 'fields') {
      this._rebuildData();
    }
  }

  _onFormFieldPropertyChange(event) {
    if (event.propertyName === 'label') {
      this._rebuildData();
    }
  }
}
