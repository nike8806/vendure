import { Pipe, PipeTransform } from '@angular/core';

import { Asset } from '../../common/generated-types';

@Pipe({
    name: 'assetPreview',
})
export class AssetPreviewPipe implements PipeTransform {
    transform(asset: Asset, preset: string | number = 'thumb'): string {
        if (!asset.preview || typeof asset.preview !== 'string') {
            throw new Error(`Expected an Asset, got ${JSON.stringify(asset)}`);
        }
        const fp = asset.focalPoint ? `&fpx=${asset.focalPoint.x}&fpy=${asset.focalPoint.y}` : '';
        if (Number.isNaN(Number(preset))) {
            return `${asset.preview}?preset=${preset}${fp}`;
        } else {
            return `${asset.preview}?w=${preset}&h=${preset}${fp}`;
        }
    }
}
