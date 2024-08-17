import { useState } from 'react'
import Section from '../Section'
import * as S from './style'

import zoom from '../../assets/images/mais-zoom_1.png'
import play from '../../assets/images/botao-play_1.png'
import close from '../../assets/images/close_1.png'

type Props = {
    defaultCover: string
    name: string
    items: GalleryItem[]
}

interface ModalProps extends GalleryItem {
    isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
    const [modal, setModal] = useState<ModalProps>({
        type: 'image',
        url: '',
        isVisible: false
    })

    const getMediaCover = (item: GalleryItem) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item: GalleryItem) => {
        if (item.type === 'image') return zoom
        return play
    }

    const closeModal = () => {
        setModal({
            isVisible: false,
            type: 'image',
            url: ''
        })
    }
    return (
        <>
            <Section background="black" title="Galeria">
                <S.Items>
                    {items.map((media, index) => (
                        <S.Item
                            key={media.url}
                            onClick={() =>
                                setModal({
                                    type: media.type,
                                    url: media.url,
                                    isVisible: true
                                })
                            }
                        >
                            <img
                                srcSet={getMediaCover(media)}
                                alt={`Mídia ${index + 1} de ${name}`}
                            />
                            <S.Action>
                                <img
                                    srcSet={getMediaIcon(media)}
                                    alt="Clique para maximar a mídia"
                                />
                            </S.Action>
                        </S.Item>
                    ))}
                </S.Items>
            </Section>
            <S.Modal className={modal.isVisible ? 'visible' : ''}>
                <S.ModalContent className="container">
                    <header>
                        <h4>{name}</h4>
                        <img srcSet={close} alt="" onClick={closeModal} />
                    </header>
                    {modal.type === 'image' ? (
                        <img srcSet={modal.url} alt="" />
                    ) : (
                        <iframe src={modal.url} />
                    )}
                </S.ModalContent>
                <div className="overlay" onClick={closeModal}></div>
            </S.Modal>
        </>
    )
}

export default Gallery
