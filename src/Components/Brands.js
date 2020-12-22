import React from 'react';
import {BrandsPanel, BrandLink, BrandImage} from '../Elements/BrandsPanel';

function Brands() {
    return(
        <BrandsPanel>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/milltek.png" alt="Milltek" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/forge.png" alt="Forge" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/sachs.png" alt="Sachs Performance" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/mountune.png" alt="Mountune Performance" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/kw.png" alt="KW Suspensions" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/bmc.png" alt="BMC Air Filters" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/carbonio.png" alt="Carbonio" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/akrapovic.png" alt="Akrapovic" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/ragazzon.png" alt="Ragazzon" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/ferodo-racing.png" alt="Ferodo Racing" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/redbull.png" alt="Red Bull" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/cargraphic.png" alt="Cargraphic" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/supersprint.png" alt="Supersprint" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/pipercross.png" alt="Pipercross" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/rsrspa.png" alt="RSR Spa" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/armytrix.png" alt="Armytrix" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/ipe-exhaust.png" alt="IPE Exhaust" />
            </BrandLink>
            <BrandLink href="#">
                <BrandImage src="/static/images/footer/rsrnurburg.png" alt="RSR Nurburg" />
            </BrandLink>
        </BrandsPanel>
    );
}
export default Brands;