// Credit for The NATS.IO Authors
// Copyright 2021-2022 The Memphis Authors
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.package server

import './style.scss';
import { Close } from '@material-ui/icons';

import React from 'react';

const Tag = ({ tag, onDelete, editable }) => {
    return (
        <div className="tag-wrapper" style={{ background: `rgba(${tag.color},0.2)` }}>
            <div className="tag-content" style={{ color: `rgb(${tag.color})` }}>
                {tag.name}
            </div>
            {editable && <Close className="close" style={{ color: `rgb(${tag.color})` }} onClick={onDelete} />}
        </div>
    );
};

export default Tag;
