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

export default class TagLookupCall extends StaticLookupCall {

  constructor() {
    super();
  }

  _data() {
    let tags = TagLookupCall.TAGS;
    tags.sort();

    let data = [];
    tags.forEach(tag => {
      data.push([tag, tag]);
    });
    return data;
  }

  static TAGS = ['scout', 'eclipse scout', 'scout js', 'eclipse', 'bsi', 'business systems integration ag', 'open source', 'widgets', 'js widgets'];
}
