# Research evidence and public materials

This index connects the CV to public validation figures, methods, and videos. The GitHub repository contains the portfolio source. It does not currently contain runnable CFD cases, meshes, numerical input data, or post-processing scripts; figures and videos alone are not a reproducible case archive.

## Thermal energy storage

- **Model development:** ANSYS Fluent phase-change modeling, including an apparent heat-capacity treatment for a solid-solid transition at 25 degrees C.
- **Liquid-fraction validation:** [Fluent/OpenFOAM comparison with Alnakeeb et al.](https://meherabhossen.pages.dev/assets/img/sl-v.png), showing PCM liquid fraction versus time. [Methods and reference](https://meherabhossen.pages.dev/#research-pcm).
- **Temperature validation:** [Comparison with Farulla et al.](https://meherabhossen.pages.dev/assets/img/ss-v.png), showing temperature in K versus time. [Methods and reference](https://meherabhossen.pages.dev/#research-plaster).
- **Mesh-check response:** The alphabet-fin study uses fully melted time in its mesh comparison. A separate verified time-step-convergence metric is not claimed here.
- **Analysis:** The separate solid-solid fin-design study compared five fin angles and orientations; the author-supplied CV reports a 79.3% charging-time reduction for its best configuration against the unfinned baseline. This value is not assigned to the alphabet-shaped solid-liquid fin study.
- **Visualization:** [PCM melting animation](https://meherabhossen.pages.dev/#pcm-animation-alnakeeb).

## Droplet dynamics

- **Solver setup and analysis:** VOF models in ANSYS Fluent and OpenFOAM; evaluation of droplet spreading, deformation, and Weber-number effects.
- **Falling-droplet benchmark:** [Validation figure](https://meherabhossen.pages.dev/assets/img/validation-ref4.png) and [context](https://meherabhossen.pages.dev/#validation-ref4-heading). The supplied CV reports a 3% spread-ratio error against Rafi et al. (2022).
- **Droplet-pair benchmark:** [Validation figure](https://meherabhossen.pages.dev/assets/img/validation-ref5.png) and [context](https://meherabhossen.pages.dev/#validation-ref5-heading). The supplied CV reports an 8% comparison error over We = 54-128 against Goswami and Hardalupas (2023).
- **Videos:** [Simulation videos](https://meherabhossen.pages.dev/#videos).
- The droplet-pair comparison above is a different benchmark from the single-droplet validation in the rain-impact conference manuscript. Their error values should not be interchanged.

## Particle settling in non-Newtonian drilling fluids

- **Scope:** The 0.5% PAC case in Figure 6 of Awad et al. (2021), using Cross and Carreau models for 2, 3, 4 and 5 mm particles. The owner reports using ANSYS Fluent and OpenFOAM; the supplied comparison values were confirmed to be ANSYS Fluent results.
- **Public validation figure:** [Fluent comparison plot](https://meherabhossen.pages.dev/assets/img/particle-settling-pac05.png) and [methods and results](https://meherabhossen.pages.dev/#research-particle-settling).
- **Error definition:** Absolute relative deviation from the corresponding published CFD model prediction, calculated pointwise as `abs(v_Fluent - v_reference) / abs(v_reference) * 100`. The maximum is taken separately over the four particle sizes for each rheology model.
- **Maximum deviations:** Cross 4.56%; Carreau 10.26%. These values compare the Fluent data with published CFD predictions. The experimental data are also plotted for context.
- **Reference:** A. M. Awad, I. A. Hussein, M. S. Nasser, H. Karami, R. Ahmed. "CFD modeling of particle settling in drilling fluids: Impact of fluid rheology and particle characteristics." *Journal of Petroleum Science and Engineering* 199 (2021), 108326. [DOI](https://doi.org/10.1016/j.petrol.2020.108326).

## Manuscripts and submission status

Statuses below follow information supplied by the author in November 2026. Conference abstracts are accepted and full papers are under review. Proceedings details and DOIs are not listed for these manuscripts.

**Journal manuscript**

**Md. Meherab Hossen**, Md. Asif Farhan, Tabasom Rahman, Hasibuzzaman Mahmud, Dewan Hasan Ahmed. "Numerical Investigation of Enhanced Thermal Energy Storage in Solid-Solid Phase Change Materials with New Fin Architecture for Shell-and-Tube Heat Exchanger Applications." *Journal of Energy Storage*. Submitted October 2026; under review.

**Conference manuscripts**

1. **Md. Meherab Hossen**, Md. Asif Farhan, Radia Siddika, Nowroze Farhan Ifraj. "Numerical Investigation of the Coupled Effect of Impact Angle and Ambient Rotor Downwash on Rain-Droplet Impact Regimes over UAV Surface." 10th BSME International Conference on Thermo-Fluid Engineering. First author; abstract accepted; full paper under review (submitted September 2026).

2. Md. Asif Farhan, **Md. Meherab Hossen**, Radia Siddika, Nowroze Farhan Ifraj. "Effect of Pre-Impact Thermal History on the Impact and Freezing of Free-Falling Supercooled Droplets on UAV-Relevant Surfaces." 10th BSME International Conference on Thermo-Fluid Engineering. Second author; abstract accepted; full paper under review (submitted September 2026).

3. Tabasom Rahman, Md. Asif Farhan, **Md. Meherab Hossen**, Fahmid Zaman Adnan, Ibrarur Rahman Choudhury, Dewan Hasan Ahmed. "Thermal Energy Storage Enhancement Using Alphabet-Inspired Fins in a Shell-and-Tube Heat Exchanger with Solid-Liquid PCM." 10th BSME International Conference on Thermo-Fluid Engineering. Third author; abstract accepted; full paper under review (submitted September 2026).

## Extending the public record

The submitted manuscripts are not deposited in this repository. Reproducible numerical cases can be added when the author has cleared sharing permissions and supplied the actual files. A useful case release should include the solver/version, mesh or mesh-generation instructions, initial and boundary conditions, run instructions, convergence logs, reference data with its reuse permission, and scripts that regenerate the validation plot. Do not include employer/client geometry, data, or restricted material.
