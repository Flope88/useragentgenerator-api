declare module '@apiverve/useragentgenerator' {
  export interface useragentgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface useragentgeneratorResponse {
    status: string;
    error: string | null;
    data: UserAgentGeneratorData;
    code?: number;
  }


  interface UserAgentGeneratorData {
      ua:      string;
      browser: Browser;
      engine:  Engine;
      os:      Engine;
      device:  Device;
      cpu:     CPU;
  }
  
  interface Browser {
      name:    string;
      version: string;
      major:   string;
  }
  
  interface CPU {
  }
  
  interface Device {
      vendor: string;
      model:  string;
  }
  
  interface Engine {
      name:    string;
      version: string;
  }

  export default class useragentgeneratorWrapper {
    constructor(options: useragentgeneratorOptions);

    execute(callback: (error: any, data: useragentgeneratorResponse | null) => void): Promise<useragentgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: useragentgeneratorResponse | null) => void): Promise<useragentgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<useragentgeneratorResponse>;
  }
}
