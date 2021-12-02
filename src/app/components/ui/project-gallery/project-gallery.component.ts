import { Component, Input, OnInit } from '@angular/core';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';

@Component({
    selector: 'project-gallery',
    templateUrl: './project-gallery.component.html',
    styleUrls: ['./project-gallery.component.scss'],
})
export class ProjectGalleryComponent implements OnInit {
    constructor(private imageService: NzImageService) {}

    thumbnailTransformation = 'c_thumb,w_200,h_112';
    thumbnails = [];
    @Input() blobPrimary: string;
    @Input() blobSecondary: string;
    @Input() blobTertiary: string;
    @Input() images: NzImage[] = [
        { src: 'https://res.cloudinary.com/stamatakis/image/upload/v1638233732/portfolio/gymq/1' },
        { src: 'https://res.cloudinary.com/stamatakis/image/upload/v1638233696/portfolio/gymq/2' },
        { src: 'https://res.cloudinary.com/stamatakis/image/upload/v1638233688/portfolio/gymq/3' },
        { src: 'https://res.cloudinary.com/stamatakis/image/upload/v1638233685/portfolio/gymq/3' },
    ];

    public openPreview(index: number): void {
        let previewRef = this.imageService.preview(this.images);
        previewRef.switchTo(index);
    }

    ngOnInit(): void {
        this.thumbnails = this.images.slice(0, 4).map((image) => {
            let parts = image.src.split('upload');
            return `${parts[0]}upload/${this.thumbnailTransformation}${parts[1]}`;
        });
        this.images = this.images.map((image) => {
            let parts = image.src.split('upload');
            return {
                src: image.src,
                alt: `${parts[0]}upload/${this.thumbnailTransformation}${parts[1]}.png`,
            };
        });
    }
}
