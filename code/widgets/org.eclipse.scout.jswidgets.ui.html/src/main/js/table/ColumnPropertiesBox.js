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
import {GroupBox, models} from '@eclipse-scout/core';
import ColumnPropertiesBoxModel from './ColumnPropertiesBoxModel';

export default class ColumnPropertiesBox extends GroupBox {

  constructor() {
    super();
    this.column = null;
  }

  _jsonModel() {
    return models.get(ColumnPropertiesBoxModel);
  }

  _init(model) {
    super._init(model);

    this._setColumn(this.column);
  }

  setColumn(column) {
    this.setProperty('column', column);
  }

  _setColumn(column) {
    this._setProperty('column', column);
    if (!this.column) {
      return;
    }
    let autoOptimizeWidthField = this.widget('AutoOptimizeWidthField');
    autoOptimizeWidthField.setValue(this.column.autoOptimizeWidth);
    autoOptimizeWidthField.on('propertyChange', this._onPropertyChange.bind(this));

    let autoOptimizeMaxWidthField = this.widget('AutoOptimizeMaxWidthField');
    autoOptimizeMaxWidthField.setValue(this.column.autoOptimizeMaxWidth);
    autoOptimizeMaxWidthField.on('propertyChange', this._onPropertyChange.bind(this));

    let editableField = this.widget('EditableField');
    editableField.setValue(this.column.editable);
    editableField.on('propertyChange', this._onPropertyChange.bind(this));

    let modifiableField = this.widget('ModifiableField');
    modifiableField.setValue(this.column.modifiable);
    modifiableField.on('propertyChange', this._onPropertyChange.bind(this));

    let removableField = this.widget('RemovableField');
    removableField.setValue(this.column.removable);
    removableField.on('propertyChange', this._onPropertyChange.bind(this));

    let fixedWidthField = this.widget('FixedWidthField');
    fixedWidthField.setValue(this.column.fixedWidth);
    fixedWidthField.on('propertyChange', this._onPropertyChange.bind(this));

    let fixedPositionField = this.widget('FixedPositionField');
    fixedPositionField.setValue(this.column.fixedPosition);
    fixedPositionField.on('propertyChange', this._onPropertyChange.bind(this));

    let groupedField = this.widget('GroupedField');
    groupedField.setValue(this.column.grouped);
    groupedField.on('propertyChange', this._onPropertyChange.bind(this));

    let headerMenuEnabledField = this.widget('HeaderMenuEnabledField');
    headerMenuEnabledField.setValue(this.column.headerMenuEnabled);
    headerMenuEnabledField.on('propertyChange', this._onPropertyChange.bind(this));

    let headerHtmlEnabledField = this.widget('HeaderHtmlEnabledField');
    headerHtmlEnabledField.setValue(this.column.headerHtmlEnabled);
    headerHtmlEnabledField.on('propertyChange', this._onPropertyChange.bind(this));

    let htmlEnabledField = this.widget('HtmlEnabledField');
    htmlEnabledField.setValue(this.column.htmlEnabled);
    htmlEnabledField.on('propertyChange', this._onPropertyChange.bind(this));

    let headerTooltipHtmlEnabledField = this.widget('HeaderTooltipHtmlEnabledField');
    headerTooltipHtmlEnabledField.setValue(this.column.headerTooltipHtmlEnabled);
    headerTooltipHtmlEnabledField.on('propertyChange', this._onPropertyChange.bind(this));

    let mandatoryField = this.widget('MandatoryField');
    mandatoryField.setValue(this.column.mandatory);
    mandatoryField.on('propertyChange', this._onPropertyChange.bind(this));

    let sortActiveField = this.widget('SortActiveField');
    sortActiveField.setValue(this.column.sortActive);
    sortActiveField.on('propertyChange', this._onPropertyChange.bind(this));

    let sortAscendingField = this.widget('SortAscendingField');
    sortAscendingField.setValue(this.column.sortAscending);
    sortAscendingField.on('propertyChange', this._onPropertyChange.bind(this));

    let textWrapField = this.widget('TextWrapField');
    textWrapField.setValue(this.column.textWrap);
    textWrapField.on('propertyChange', this._onPropertyChange.bind(this));

    let displayableField = this.widget('DisplayableField');
    displayableField.setValue(this.column.displayable);
    displayableField.on('propertyChange', this._onPropertyChange.bind(this));

    let visibleField = this.widget('VisibleField');
    visibleField.setValue(this.column.visible);
    visibleField.on('propertyChange', this._onPropertyChange.bind(this));

    let cssClassField = this.widget('CssClassField');
    cssClassField.setValue(this.column.cssClass);
    cssClassField.on('propertyChange', this._onPropertyChange.bind(this));

    let horizontalAlignmentField = this.widget('HorizontalAlignmentField');
    horizontalAlignmentField.setValue(this.column.horizontalAlignment);
    horizontalAlignmentField.on('propertyChange', this._onPropertyChange.bind(this));

    let textField = this.widget('TextField');
    textField.setValue(this.column.text);
    textField.on('propertyChange', this._onPropertyChange.bind(this));

    let headerTooltipTextField = this.widget('HeaderTooltipTextField');
    headerTooltipTextField.setValue(this.column.headerTooltipText);
    headerTooltipTextField.on('propertyChange', this._onPropertyChange.bind(this));

    let headerIconIdField = this.widget('HeaderIconIdField');
    headerIconIdField.setValue(this.column.headerIconId);
    headerIconIdField.on('propertyChange', this._onPropertyChange.bind(this));

    let headerCssClassField = this.widget('HeaderCssClassField');
    headerCssClassField.setValue(this.column.headerCssClass);
    headerCssClassField.on('propertyChange', this._onPropertyChange.bind(this));

    let sortIndexField = this.widget('SortIndexField');
    sortIndexField.setValue(this.column.sortIndex);
    sortIndexField.on('propertyChange', this._onPropertyChange.bind(this));

    let widthField = this.widget('WidthField');
    widthField.setValue(this.column.width);
    widthField.on('propertyChange', this._onPropertyChange.bind(this));

    let minWidthField = this.widget('MinWidthField');
    minWidthField.setValue(this.column.minWidth);
    minWidthField.on('propertyChange', this._onPropertyChange.bind(this));

    let maxLengthField = this.widget('MaxLengthField');
    maxLengthField.setValue(this.column.maxLength);
    maxLengthField.on('propertyChange', this._onPropertyChange.bind(this));

    column.table.on('sort', this._onSort.bind(this));
    column.table.on('group', this._onGroup.bind(this));
    column.table.on('columnResized', this._onColumnResized.bind(this));
  }

  _onColumnResized(data) {
    if (this.column === data.column) {
      let widthField = this.widget('WidthField');
      widthField.setValue(this.column.width);
    }
  }

  _onSort(data) {
    if (this.column === data.column) {
      let sortActiveField = this.widget('SortActiveField');
      sortActiveField.setValue(this.column.sortActive);
      let sortAscendingField = this.widget('SortAscendingField');
      sortAscendingField.setValue(this.column.sortAscending);
      let sortIndexField = this.widget('SortIndexField');
      sortIndexField.setValue(this.column.sortIndex);
    }
  }

  _onGroup(data) {
    if (this.column === data.column) {
      let groupedField = this.widget('GroupedField');
      groupedField.setValue(this.column.grouped);
    }
  }

  _onPropertyChange(event) {
    if (event.propertyName === 'value' && event.source.id === 'AutoOptimizeWidthField') {
      this.column.setAutoOptimizeWidth(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'VisibleField') {
      this.column.setVisible(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'DisplayableField') {
      this.column.setDisplayable(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'CssClassField') {
      this.column.setCssClass(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'EditableField') {
      this.column.setEditable(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'MandatoryField') {
      this.column.setMandatory(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'WidthField') {
      this.column.setWidth(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'MaxLengthField') {
      this.column.setMaxLength(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'TextField') {
      this.column.setText(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'HeaderTooltipTextField') {
      this.column.setHeaderTooltipText(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'HeaderTooltipHtmlEnabledField') {
      this.column.setHeaderTooltipHtmlEnabled(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'HeaderIconIdField') {
      this.column.setHeaderIconId(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'HeaderCssClassField') {
      this.column.setHeaderCssClass(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'HeaderHtmlEnabledField') {
      this.column.setHeaderHtmlEnabled(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'TextWrapField') {
      this.column.setTextWrap(event.newValue);
    } else if (event.propertyName === 'value' && event.source.id === 'HorizontalAlignmentField') {
      let hAlign = event.newValue;
      if (hAlign < 0) {
        hAlign = -1;
      } else if (hAlign > 0) {
        hAlign = 1;
      }
      this.column.setHorizontalAlignment(hAlign);
    } else if (event.propertyName === 'value' && event.source.id === 'FixedWidthField') {
      this.column.fixedWidth = event.newValue;
      this.column.table.invalidateLayoutTree();
    } else if (event.propertyName === 'value' && event.source.id === 'FixedPositionField') {
      this.column.fixedPosition = event.newValue;
    } else if (event.propertyName === 'value' && event.source.id === 'HeaderMenuEnabledField') {
      this.column.headerMenuEnabled = event.newValue;
    }
  }
}
