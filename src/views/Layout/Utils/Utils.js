export function Header(params) {
    const count = 0
    return (
        <thead>
            <tr>
                {params.Header.map((ob) =><th key={ob}>{ob}</th>)}
            </tr>
        </thead>
    )
}

export function Footer(params) {
    return (
        <tfoot>
            <tr>
                {params.Footer.map((ob) => <th key={ob}>{ob}</th>)}
            </tr>
        </tfoot>
    )
}
