```jsx
const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const SOUND_ASSEMBLE_URL = '/assets/sounds/assemble.mp3';
const SOUND_TYPE_URL = '/assets/sounds/type.mp3';

const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
  assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
  type: { src: [SOUND_TYPE_URL], loop: true }
};
const bleepsSettings = {
  assemble: { player: 'assemble' },
  type: { player: 'type' }
};
const animatorGeneral = { duration: { enter: 200, exit: 200 } };

const Sandbox = () => {
  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <ArwesThemeProvider>
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <StylesBaseline styles={{
          body: { fontFamily: FONT_FAMILY_ROOT }
        }} />
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <FrameUnderline
            animator={{ activate }}
            palette='primary'
            hover
          >
            <Text>
              Futuristic Sci-Fi UI Web Framework
            </Text>
          </FrameUnderline>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>
  );
};

render(<Sandbox />);
```
