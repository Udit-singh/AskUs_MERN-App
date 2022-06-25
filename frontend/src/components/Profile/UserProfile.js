import { useState } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from './tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
            <h2>Name:</h2> {stored.name}
        </Group>
        <Group>
            <h2>Introdution:</h2> {stored.introdution}
        </Group>
        <Group>
            <h2>Education:</h2> {stored.education}
        </Group>
        <Group>
            <h2>Employment:</h2> {stored.employment}
        </Group>
        <Group>
            <h2>Topics you know about:</h2> {stored.topics}
        </Group>
        <Group>
            <h2>Description:</h2> {stored.description}
        </Group>
        <Group>
            <h2>Location:</h2> {stored.location}
        </Group>
        <Group>
            <h2>Interests:</h2> {stored.interests}
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <h2>Favourite Color:</h2> <ColorBox color={stored.color}/>
        </Group>
        <Group>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}