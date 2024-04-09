import type { RspressPlugin } from '@rspress/shared';
import type { Content } from 'mdast';
import type { Dictionary } from 'util-ts-types';
type RsbuildConfig = NonNullable<RspressPlugin['builderConfig']>;
export interface ComponentRegistration<ComponentMetaProvider = void> {
    componentPath: string;
    propsProvider?: (input: ComponentMetaProvider) => Dictionary<unknown>;
    childrenProvider?: (input: ComponentMetaProvider) => Content[];
}
export declare class RemarkPluginFactoryBase {
    private readonly baseOptions;
    constructor(baseOptions: {
        components: ComponentRegistration<any>[];
    });
    get mdxComponents(): string[];
    get builderConfig(): RsbuildConfig;
}
export {};
//# sourceMappingURL=FactoryBase.d.ts.map