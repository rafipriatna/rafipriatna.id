import React, { Fragment } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export function Text({ text }) {
    if (!text) return null
    return text.map((value, index) => {
        const {
            annotations: { bold, code, color, italic, strikethrough, underline },
            text
        } = value

        return (
            <span
                key={index}
                className={[
                    bold ? 'font-bold' : null,
                    italic ? 'italic' : null,
                    code
                        ? 'bg-indigo-200 dark:bg-indigo-900 dark:bg-opacity-50 text-indigo-500 dark:text-indigo-200 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base'
                        : null,
                    strikethrough ? 'line-through' : null,
                    underline ? 'underline' : null
                ].join(' ')}
                style={color !== 'default' ? { color } : {}}
            >
                {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
            </span>
        )
    })
}

export function Blocks(block) {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
        case 'paragraph':
            return (
                <p>
                    <Text text={value.text} />
                </p>
            )

        case 'heading_1':
            return (
                <h1><Text text={value.text} /></h1>
            )

        case 'heading_2':
            return (
                <h2><Text text={value.text} /></h2>
            )

        case 'heading_3':
            return (
                <h3><Text text={value.text} /></h3>
            )

        case 'numbered_list_item':
            return (
                <ul>
                    <li>
                        <Text text={value.text} />
                    </li>
                </ul>
            )

        case 'to_do':
            return (
                <div>
                    <label
                        className='flex items-center justify-start space-x-3'
                    >
                        <input
                            id={id}
                            aria-describedby={value.text}
                            name={id}
                            type='checkbox'
                            className='w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500'
                        />
                        <Text text={value.text} />
                    </label>
                </div>
            )

        case 'toggle':
            return (
                <details>
                    <summary>
                        <Text text={value.text} />
                    </summary>
                    {value.children?.map((block) => (
                        <Fragment key={block.id}>{Blocks(block)}</Fragment>
                    ))}
                </details>
            )

        case 'image':
            let image;
            const caption =
                value.caption?.length >= 1 ? value.caption[0].plain_text : '';

            if (value.type === 'file') {
                image = <GatsbyImage className='rounded-xl' width={1200} height={684} alt={caption ? caption : 'Tanpa keterangan.'} image={value.remoteImage.childImageSharp.gatsbyImageData}
                />
            } else {
                image = <img className='rounded-xl' width={1200} height={684} alt={caption ? caption : 'Tanpa keterangan.'} src={value.external.url}
                />
            }

            return (
                <figure className='object-none object-center'>
                    {image}
                    {caption && (
                        <figcaption className='text-center'>{caption}</figcaption>
                    )}
                </figure>
            )

        case 'code':
            return (
                <pre>
                    <code>{value.text[0].text.content}</code>
                </pre>
            )

        case 'callout':
            return (
                <div className="flex space-x-4 bg-gray-50 dark:bg-slate-800 rounded-lg p-3">
                    {value.icon && <span>{value.icon.emoji}</span>}
                    <div>
                        <Text text={value.text} />
                    </div>
                </div>
            )

        case 'quote':
            return (
                <blockquote className='p-4 rounded-r-lg'>
                    <Text text={value.text} />
                </blockquote>
            )

        case 'divider':
            return (
                <hr className='my-16 w-full border-none text-center h-10 '></hr>
            )

        default:
            return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type
                })`
    }
}
