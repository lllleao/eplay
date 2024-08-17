import { ButtonContainer, ButtonLink } from './style'

type Props = {
    type: 'button' | 'link'
    title: string
    to?: string
    onClick?: () => void
    children: string
    variant?: 'primary' | 'secondary'
    disabled?: boolean
}

const Button = ({
    type,
    title,
    to,
    onClick,
    children,
    variant = 'primary',
    disabled
}: Props) => {
    if (type === 'button') {
        return (
            <ButtonContainer
                $variant={variant}
                type="button"
                title={title}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </ButtonContainer>
        )
    }

    return (
        <ButtonLink to={to as string} title={title}>
            {children}
        </ButtonLink>
    )
}

export default Button
