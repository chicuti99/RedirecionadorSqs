from matplotlib.texmanager import TexManager
from typing import Literal, Sequence
from .path import Path
from .font_manager import FontProperties

class TextToPath:

    FONT_SCALE = ...
    DPI = ...
    def __init__(self) -> None: ...
    def get_text_width_height_descent(
        self, s: str, prop: FontProperties, ismath: bool | Literal["TeX"]
    ): ...
    def get_text_path(
        self, prop: FontProperties, s: str, ismath: bool | Literal["TeX"] = ...
    ): ...
    def get_glyphs_with_font(
        self, font: FontProperties, s: str, glyph_map=..., return_new_glyphs_only=...
    ): ...
    def get_glyphs_mathtext(
        self, prop: FontProperties, s: str, glyph_map=..., return_new_glyphs_only=...
    ): ...
    def get_texmanager(self) -> TexManager: ...
    def get_glyphs_tex(
        self, prop: FontProperties, s: str, glyph_map=..., return_new_glyphs_only=...
    ): ...

text_to_path = ...

class TextPath(Path):
    def __init__(
        self,
        xy: Sequence[float],
        s: str,
        size=...,
        prop: FontProperties = ...,
        _interpolation_steps: int = ...,
        usetex: bool = False,
    ) -> None: ...
    def set_size(self, size: float): ...
    def get_size(self) -> float: ...
    @property
    def vertices(self) -> Path: ...
    @property
    def codes(self): ...
