export type Decoder<InputT, OutputT> = (input?: InputT) => Promise<OutputT>;
