import * as React from 'react';
import {MouseEventHandler, ReactNode} from 'react';
import {Icon} from './icon';
import {IconElement} from './icon-element';

type Type = 'Primary' | 'Secondary';

export const Button = (props: {onClick: MouseEventHandler; children: ReactNode; title?: string; type?: Type; icon?: Icon}) => (
    <button className={'argo-button ' + (props.type !== 'Secondary' ? 'argo-button--base' : 'argo-button--base-o')} title={props.title} onClick={props.onClick}>
        {props.icon && <IconElement icon={props.icon} />} {props.children}
    </button>
);
