import React from 'react'
import Link from 'next/link'

export default () => {
    return (
        <div>
            <h1>index</h1>
            <ul>
                <li>
                    <Link href={`page-2`}>
                        <a>page-2</a>
                    </Link>
                </li>
                <li>
                    <Link href={`page-3`}>
                        <a>page-3</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}