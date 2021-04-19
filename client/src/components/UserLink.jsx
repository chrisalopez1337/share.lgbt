import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function UserLink({ data }) {
    const { redirect_link, short_link, clicks } = data;
    return (
        <>
            <h1>{short_link}</h1>
        </>
    );
}
