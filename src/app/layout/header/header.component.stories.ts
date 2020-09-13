import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';

storiesOf('Header', module)
    .addDecorator(
        moduleMetadata({
            declarations: [HeaderComponent]
        })
    )
    .add(
        'Default',
        () => ({
            template: `
            <app-header></app-header>
            `,
            props: {
            }
        })
    )
    .add(
        'With different color',
        () => ({
            template: `
            <app-header [storybookClr]="color" [buttonClr]="buttonClr"></app-header>
            `,
            props: {
                color: '#10ac84',
                buttonClr: '#006266'
            }
        })
    );
