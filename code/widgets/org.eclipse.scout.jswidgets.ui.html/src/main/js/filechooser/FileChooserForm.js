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
import FileChooserFormModel from './FileChooserFormModel';
import {FileInput, Form, models, scout, strings} from '@eclipse-scout/core';
import {DisplayParentLookupCall} from '../index';

export default class FileChooserForm extends Form {

  constructor() {
    super();
  }

  _jsonModel() {
    return models.get(FileChooserFormModel);
  }

  _init(model) {
    super._init(model);

    let button = this.widget('Button');
    button.on('click', this._onButtonClick.bind(this));
    this.widget('MaximumUploadSizeField').setValue(FileInput.DEFAULT_MAXIMUM_UPLOAD_SIZE);
    this.widget('ChosenFilesField').on('appLinkAction', this._onChosenFilesAppLinkAction.bind(this));
    this._updateChosenFiles([]);
  }

  _onButtonClick(event) {
    let fileChooser = scout.create('FileChooser', {
      parent: this.session.desktop,
      acceptTypes: this.widget('AcceptTypesField').value,
      displayParent: DisplayParentLookupCall.displayParentForType(this, this.widget('DisplayParentField').value),
      maximumUploadSize: this.widget('MaximumUploadSizeField').value,
      multiSelect: this.widget('MultiSelectField').value
    });
    this.widget('EventsTab').setField(fileChooser);
    fileChooser.open();
    fileChooser.on('upload', () => {
      this._updateChosenFiles(fileChooser.files);
      fileChooser.close();
    });
  }

  _updateChosenFiles(files) {
    let chosenFilesText = '';
    if (files.length === 0) {
      chosenFilesText = this.session.text('FileChooserNoFilesChosen');
    } else if (files.length === 1) {
      chosenFilesText = this.session.text('FileChooserOneFileChosen');
    } else {
      chosenFilesText = this.session.text('FileChooserNFilesChosen', files.length);
    }

    let fileDescriptions = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let html = '<span class="app-link unfocusable" data-ref="' + i + '">' + strings.encode(file.name) + ' (' + file.size + ' bytes)</span>';
      fileDescriptions.push(html);
    }

    let chosenFilesField = this.widget('ChosenFilesField');
    chosenFilesField.files = files; // remember files to handle app link action
    chosenFilesField.setValue(chosenFilesText + ' ' + fileDescriptions.join(', '));
  }

  _onChosenFilesAppLinkAction(event) {
    let file = this.widget('ChosenFilesField').files[event.ref];
    let url = URL.createObjectURL(file);
    this.session.desktop.openUri(url);
  }
}
